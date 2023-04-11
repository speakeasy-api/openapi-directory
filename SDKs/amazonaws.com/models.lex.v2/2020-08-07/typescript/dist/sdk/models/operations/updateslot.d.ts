import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates whether a slot can return multiple values.
 */
export declare class UpdateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
    allowMultipleValues?: boolean;
}
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 */
export declare class UpdateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
    obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}
/**
 * Specifications for the constituent sub slots and the expression for the composite slot.
 */
export declare class UpdateSlotRequestBodySubSlotSetting extends SpeakeasyBase {
    expression?: string;
    slotSpecifications?: Record<string, shared.Specifications>;
}
/**
 * Specifies the elicitation setting details for constituent sub slots of a composite slot.
 */
export declare class UpdateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
    defaultValueSpecification?: shared.SlotDefaultValueSpecification;
    promptSpecification?: shared.PromptSpecification;
    sampleUtterances?: shared.SampleUtterance[];
    slotCaptureSetting?: shared.SlotCaptureSetting;
    slotConstraint?: shared.SlotConstraintEnum;
    /**
     * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     */
    waitAndContinueSpecification?: shared.WaitAndContinueSpecification;
}
export declare class UpdateSlotRequestBody extends SpeakeasyBase {
    /**
     * The new description for the slot.
     */
    description?: string;
    /**
     * Indicates whether a slot can return multiple values.
     */
    multipleValuesSetting?: UpdateSlotRequestBodyMultipleValuesSetting;
    /**
     * Determines whether Amazon Lex obscures slot values in conversation logs.
     */
    obfuscationSetting?: UpdateSlotRequestBodyObfuscationSetting;
    /**
     * The new name for the slot.
     */
    slotName: string;
    /**
     * The unique identifier of the new slot type to associate with this slot.
     */
    slotTypeId?: string;
    /**
     * Specifications for the constituent sub slots and the expression for the composite slot.
     */
    subSlotSetting?: UpdateSlotRequestBodySubSlotSetting;
    /**
     * Specifies the elicitation setting details for constituent sub slots of a composite slot.
     */
    valueElicitationSetting: UpdateSlotRequestBodyValueElicitationSetting;
}
export declare class UpdateSlotRequest extends SpeakeasyBase {
    requestBody: UpdateSlotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that contains the slot.
     */
    botId: string;
    /**
     * The version of the bot that contains the slot. Must always be <code>DRAFT</code>.
     */
    botVersion: string;
    /**
     * The identifier of the intent that contains the slot.
     */
    intentId: string;
    /**
     * The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
    /**
     * The unique identifier for the slot to update.
     */
    slotId: string;
}
export declare class UpdateSlotResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateSlotResponse?: shared.UpdateSlotResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
