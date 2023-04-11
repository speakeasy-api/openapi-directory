import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 */
export declare class UpdateSlotTypeRequestBodyCompositeSlotTypeSetting extends SpeakeasyBase {
    subSlots?: shared.SubSlotTypeComposition[];
}
/**
 * Provides information about the external source of the slot type's definition.
 */
export declare class UpdateSlotTypeRequestBodyExternalSourceSetting extends SpeakeasyBase {
    grammarSlotTypeSetting?: shared.GrammarSlotTypeSetting;
}
/**
 * Contains settings used by Amazon Lex to select a slot value.
 */
export declare class UpdateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
    advancedRecognitionSetting?: shared.AdvancedRecognitionSetting;
    regexFilter?: shared.SlotValueRegexFilter;
    resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}
export declare class UpdateSlotTypeRequestBody extends SpeakeasyBase {
    /**
     * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
     */
    compositeSlotTypeSetting?: UpdateSlotTypeRequestBodyCompositeSlotTypeSetting;
    /**
     * The new description of the slot type.
     */
    description?: string;
    /**
     * Provides information about the external source of the slot type's definition.
     */
    externalSourceSetting?: UpdateSlotTypeRequestBodyExternalSourceSetting;
    /**
     * The new built-in slot type that should be used as the parent of this slot type.
     */
    parentSlotTypeSignature?: string;
    /**
     * The new name of the slot type.
     */
    slotTypeName: string;
    /**
     * A new list of values and their optional synonyms that define the values that the slot type can take.
     */
    slotTypeValues?: shared.SlotTypeValue[];
    /**
     * Contains settings used by Amazon Lex to select a slot value.
     */
    valueSelectionSetting?: UpdateSlotTypeRequestBodyValueSelectionSetting;
}
export declare class UpdateSlotTypeRequest extends SpeakeasyBase {
    requestBody: UpdateSlotTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot that contains the slot type.
     */
    botId: string;
    /**
     * The version of the bot that contains the slot type. Must be <code>DRAFT</code>.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
    /**
     * The unique identifier of the slot type to update.
     */
    slotTypeId: string;
}
export declare class UpdateSlotTypeResponse extends SpeakeasyBase {
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
    updateSlotTypeResponse?: shared.UpdateSlotTypeResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
