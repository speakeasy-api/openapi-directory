import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 */
export declare class CreateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Determines if a Lambda function should be invoked for a specific intent.
 */
export declare class CreateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
    active?: boolean;
    enabled?: boolean;
    fulfillmentUpdatesSpecification?: shared.FulfillmentUpdatesSpecification;
    postFulfillmentStatusSpecification?: shared.PostFulfillmentStatusSpecification;
}
/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 */
export declare class CreateIntentRequestBodyInitialResponseSetting extends SpeakeasyBase {
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
export declare class CreateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
    active?: boolean;
    closingResponse?: shared.ResponseSpecification;
    conditional?: shared.ConditionalSpecification;
    nextStep?: shared.DialogState;
}
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 */
export declare class CreateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
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
export declare class CreateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
    kendraIndex?: string;
    queryFilterString?: string;
    queryFilterStringEnabled?: boolean;
}
export declare class CreateIntentRequestBody extends SpeakeasyBase {
    /**
     * A description of the intent. Use the description to help identify the intent in lists.
     */
    description?: string;
    /**
     * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
     */
    dialogCodeHook?: CreateIntentRequestBodyDialogCodeHook;
    /**
     * Determines if a Lambda function should be invoked for a specific intent.
     */
    fulfillmentCodeHook?: CreateIntentRequestBodyFulfillmentCodeHook;
    /**
     * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
     */
    initialResponseSetting?: CreateIntentRequestBodyInitialResponseSetting;
    /**
     * <p>A list of contexts that must be active for this intent to be considered by Amazon Lex.</p> <p>When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent.</p> <p>A context can be automatically activated using the <code>outputContexts</code> property or it can be set at runtime.</p> <p> For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond.</p> <p>An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.</p>
     */
    inputContexts?: shared.InputContext[];
    /**
     * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
     */
    intentClosingSetting?: CreateIntentRequestBodyIntentClosingSetting;
    /**
     * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
     */
    intentConfirmationSetting?: CreateIntentRequestBodyIntentConfirmationSetting;
    /**
     * The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.
     */
    intentName: string;
    /**
     * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
     */
    kendraConfiguration?: CreateIntentRequestBodyKendraConfiguration;
    /**
     * <p>A lists of contexts that the intent activates when it is fulfilled.</p> <p>You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. </p> <p>When you use the <code>outputContextsList</code> property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.</p>
     */
    outputContexts?: shared.OutputContext[];
    /**
     * A unique identifier for the built-in intent to base this intent on.
     */
    parentIntentSignature?: string;
    /**
     * <p>An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza". </p> <p>In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user.. </p>
     */
    sampleUtterances?: shared.SampleUtterance[];
}
export declare class CreateIntentRequest extends SpeakeasyBase {
    requestBody: CreateIntentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot associated with this intent.
     */
    botId: string;
    /**
     * The identifier of the version of the bot associated with this intent.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
}
export declare class CreateIntentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createIntentResponse?: shared.CreateIntentResponse;
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
