import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 */
export declare class UpdateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Determines if a Lambda function should be invoked for a specific intent.
 */
export declare class UpdateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
    active?: boolean;
    enabled?: boolean;
    fulfillmentUpdatesSpecification?: shared.FulfillmentUpdatesSpecification;
    postFulfillmentStatusSpecification?: shared.PostFulfillmentStatusSpecification;
}
/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 */
export declare class UpdateIntentRequestBodyInitialResponseSetting extends SpeakeasyBase {
    /**
     *  Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
     */
    codeHook?: shared.DialogCodeHookInvocationSetting;
    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    conditional?: shared.ConditionalSpecification;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    initialResponse?: shared.ResponseSpecification;
    nextStep?: shared.DialogState;
}
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 */
export declare class UpdateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
    active?: boolean;
    closingResponse?: shared.ResponseSpecification;
    conditional?: shared.ConditionalSpecification;
    nextStep?: shared.DialogState;
}
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 */
export declare class UpdateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
    active?: boolean;
    codeHook?: shared.DialogCodeHookInvocationSetting;
    confirmationConditional?: shared.ConditionalSpecification;
    confirmationNextStep?: shared.DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    confirmationResponse?: shared.ResponseSpecification;
    declinationConditional?: shared.ConditionalSpecification;
    declinationNextStep?: shared.DialogState;
    declinationResponse?: shared.ResponseSpecification;
    elicitationCodeHook?: shared.ElicitationCodeHookInvocationSetting;
    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    failureConditional?: shared.ConditionalSpecification;
    failureNextStep?: shared.DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    failureResponse?: shared.ResponseSpecification;
    promptSpecification?: shared.PromptSpecification;
}
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
 */
export declare class UpdateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
    kendraIndex?: string;
    queryFilterString?: string;
    queryFilterStringEnabled?: boolean;
}
export declare class UpdateIntentRequestBody extends SpeakeasyBase {
    /**
     * The new description of the intent.
     */
    description?: string;
    /**
     * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
     */
    dialogCodeHook?: UpdateIntentRequestBodyDialogCodeHook;
    /**
     * Determines if a Lambda function should be invoked for a specific intent.
     */
    fulfillmentCodeHook?: UpdateIntentRequestBodyFulfillmentCodeHook;
    /**
     * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
     */
    initialResponseSetting?: UpdateIntentRequestBodyInitialResponseSetting;
    /**
     * A new list of contexts that must be active in order for Amazon Lex to consider the intent.
     */
    inputContexts?: shared.InputContext[];
    /**
     * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
     */
    intentClosingSetting?: UpdateIntentRequestBodyIntentClosingSetting;
    /**
     * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
     */
    intentConfirmationSetting?: UpdateIntentRequestBodyIntentConfirmationSetting;
    /**
     * The new name for the intent.
     */
    intentName: string;
    /**
     * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
     */
    kendraConfiguration?: UpdateIntentRequestBodyKendraConfiguration;
    /**
     * A new list of contexts that Amazon Lex activates when the intent is fulfilled.
     */
    outputContexts?: shared.OutputContext[];
    /**
     * The signature of the new built-in intent to use as the parent of this intent.
     */
    parentIntentSignature?: string;
    /**
     * New utterances used to invoke the intent.
     */
    sampleUtterances?: shared.SampleUtterance[];
    /**
     * A new list of slots and their priorities that are contained by the intent.
     */
    slotPriorities?: shared.SlotPriority[];
}
export declare class UpdateIntentRequest extends SpeakeasyBase {
    requestBody: UpdateIntentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot that contains the intent.
     */
    botId: string;
    /**
     * The version of the bot that contains the intent. Must be <code>DRAFT</code>.
     */
    botVersion: string;
    /**
     * The unique identifier of the intent to update.
     */
    intentId: string;
    /**
     * The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
}
export declare class UpdateIntentResponse extends SpeakeasyBase {
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
    updateIntentResponse?: shared.UpdateIntentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
