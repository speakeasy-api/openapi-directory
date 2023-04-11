import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 */
export declare class CreateSlotTypeRequestBodyCompositeSlotTypeSetting extends SpeakeasyBase {
    subSlots?: shared.SubSlotTypeComposition[];
}
/**
 * Provides information about the external source of the slot type's definition.
 */
export declare class CreateSlotTypeRequestBodyExternalSourceSetting extends SpeakeasyBase {
    grammarSlotTypeSetting?: shared.GrammarSlotTypeSetting;
}
/**
 * Contains settings used by Amazon Lex to select a slot value.
 */
export declare class CreateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
    advancedRecognitionSetting?: shared.AdvancedRecognitionSetting;
    regexFilter?: shared.SlotValueRegexFilter;
    resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}
export declare class CreateSlotTypeRequestBody extends SpeakeasyBase {
    /**
     * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
     */
    compositeSlotTypeSetting?: CreateSlotTypeRequestBodyCompositeSlotTypeSetting;
    /**
     * A description of the slot type. Use the description to help identify the slot type in lists.
     */
    description?: string;
    /**
     * Provides information about the external source of the slot type's definition.
     */
    externalSourceSetting?: CreateSlotTypeRequestBodyExternalSourceSetting;
    /**
     * <p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
     */
    parentSlotTypeSignature?: string;
    /**
     * The name for the slot. A slot type name must be unique within the account.
     */
    slotTypeName: string;
    /**
     * A list of <code>SlotTypeValue</code> objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.
     */
    slotTypeValues?: shared.SlotTypeValue[];
    /**
     * Contains settings used by Amazon Lex to select a slot value.
     */
    valueSelectionSetting?: CreateSlotTypeRequestBodyValueSelectionSetting;
}
export declare class CreateSlotTypeRequest extends SpeakeasyBase {
    requestBody: CreateSlotTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot associated with this slot type.
     */
    botId: string;
    /**
     * The identifier of the bot version associated with this slot type.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
}
export declare class CreateSlotTypeResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSlotTypeResponse?: shared.CreateSlotTypeResponse;
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
