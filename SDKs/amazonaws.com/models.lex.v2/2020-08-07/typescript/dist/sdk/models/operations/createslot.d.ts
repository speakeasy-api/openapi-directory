import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates whether a slot can return multiple values.
 */
export declare class CreateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
    allowMultipleValues?: boolean;
}
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 */
export declare class CreateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
    obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}
/**
 * Specifications for the constituent sub slots and the expression for the composite slot.
 */
export declare class CreateSlotRequestBodySubSlotSetting extends SpeakeasyBase {
    expression?: string;
    slotSpecifications?: Record<string, shared.Specifications>;
}
/**
 * Specifies the elicitation setting details for constituent sub slots of a composite slot.
 */
export declare class CreateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
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
export declare class CreateSlotRequestBody extends SpeakeasyBase {
    /**
     * A description of the slot. Use this to help identify the slot in lists.
     */
    description?: string;
    /**
     * Indicates whether a slot can return multiple values.
     */
    multipleValuesSetting?: CreateSlotRequestBodyMultipleValuesSetting;
    /**
     * Determines whether Amazon Lex obscures slot values in conversation logs.
     */
    obfuscationSetting?: CreateSlotRequestBodyObfuscationSetting;
    /**
     * The name of the slot. Slot names must be unique within the bot that contains the slot.
     */
    slotName: string;
    /**
     * The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.
     */
    slotTypeId?: string;
    /**
     * Specifications for the constituent sub slots and the expression for the composite slot.
     */
    subSlotSetting?: CreateSlotRequestBodySubSlotSetting;
    /**
     * Specifies the elicitation setting details for constituent sub slots of a composite slot.
     */
    valueElicitationSetting: CreateSlotRequestBodyValueElicitationSetting;
}
export declare class CreateSlotRequest extends SpeakeasyBase {
    requestBody: CreateSlotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot associated with the slot.
     */
    botId: string;
    /**
     * The version of the bot associated with the slot.
     */
    botVersion: string;
    /**
     * The identifier of the intent that contains the slot.
     */
    intentId: string;
    /**
     * The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
}
export declare class CreateSlotResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSlotResponse?: shared.CreateSlotResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
