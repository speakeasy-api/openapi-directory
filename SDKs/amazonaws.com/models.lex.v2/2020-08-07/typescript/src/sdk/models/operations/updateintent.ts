/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 */
export class UpdateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

/**
 * Determines if a Lambda function should be invoked for a specific intent.
 */
export class UpdateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "fulfillmentUpdatesSpecification" })
  @Type(() => shared.FulfillmentUpdatesSpecification)
  fulfillmentUpdatesSpecification?: shared.FulfillmentUpdatesSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "postFulfillmentStatusSpecification" })
  @Type(() => shared.PostFulfillmentStatusSpecification)
  postFulfillmentStatusSpecification?: shared.PostFulfillmentStatusSpecification;
}

/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 */
export class UpdateIntentRequestBodyInitialResponseSetting extends SpeakeasyBase {
  /**
   *  Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "codeHook" })
  @Type(() => shared.DialogCodeHookInvocationSetting)
  codeHook?: shared.DialogCodeHookInvocationSetting;

  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "conditional" })
  @Type(() => shared.ConditionalSpecification)
  conditional?: shared.ConditionalSpecification;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "initialResponse" })
  @Type(() => shared.ResponseSpecification)
  initialResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "nextStep" })
  @Type(() => shared.DialogState)
  nextStep?: shared.DialogState;
}

/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 */
export class UpdateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "closingResponse" })
  @Type(() => shared.ResponseSpecification)
  closingResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "conditional" })
  @Type(() => shared.ConditionalSpecification)
  conditional?: shared.ConditionalSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "nextStep" })
  @Type(() => shared.DialogState)
  nextStep?: shared.DialogState;
}

/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 */
export class UpdateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "codeHook" })
  @Type(() => shared.DialogCodeHookInvocationSetting)
  codeHook?: shared.DialogCodeHookInvocationSetting;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmationConditional" })
  @Type(() => shared.ConditionalSpecification)
  confirmationConditional?: shared.ConditionalSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmationNextStep" })
  @Type(() => shared.DialogState)
  confirmationNextStep?: shared.DialogState;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "confirmationResponse" })
  @Type(() => shared.ResponseSpecification)
  confirmationResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "declinationConditional" })
  @Type(() => shared.ConditionalSpecification)
  declinationConditional?: shared.ConditionalSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "declinationNextStep" })
  @Type(() => shared.DialogState)
  declinationNextStep?: shared.DialogState;

  @SpeakeasyMetadata()
  @Expose({ name: "declinationResponse" })
  @Type(() => shared.ResponseSpecification)
  declinationResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "elicitationCodeHook" })
  @Type(() => shared.ElicitationCodeHookInvocationSetting)
  elicitationCodeHook?: shared.ElicitationCodeHookInvocationSetting;

  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "failureConditional" })
  @Type(() => shared.ConditionalSpecification)
  failureConditional?: shared.ConditionalSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "failureNextStep" })
  @Type(() => shared.DialogState)
  failureNextStep?: shared.DialogState;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "failureResponse" })
  @Type(() => shared.ResponseSpecification)
  failureResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata()
  @Expose({ name: "promptSpecification" })
  @Type(() => shared.PromptSpecification)
  promptSpecification?: shared.PromptSpecification;
}

/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
 */
export class UpdateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "kendraIndex" })
  kendraIndex?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}

export class UpdateIntentRequestBody extends SpeakeasyBase {
  /**
   * The new description of the intent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dialogCodeHook" })
  @Type(() => UpdateIntentRequestBodyDialogCodeHook)
  dialogCodeHook?: UpdateIntentRequestBodyDialogCodeHook;

  /**
   * Determines if a Lambda function should be invoked for a specific intent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fulfillmentCodeHook" })
  @Type(() => UpdateIntentRequestBodyFulfillmentCodeHook)
  fulfillmentCodeHook?: UpdateIntentRequestBodyFulfillmentCodeHook;

  /**
   * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "initialResponseSetting" })
  @Type(() => UpdateIntentRequestBodyInitialResponseSetting)
  initialResponseSetting?: UpdateIntentRequestBodyInitialResponseSetting;

  /**
   * A new list of contexts that must be active in order for Amazon Lex to consider the intent.
   */
  @SpeakeasyMetadata({ elemType: shared.InputContext })
  @Expose({ name: "inputContexts" })
  @Type(() => shared.InputContext)
  inputContexts?: shared.InputContext[];

  /**
   * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intentClosingSetting" })
  @Type(() => UpdateIntentRequestBodyIntentClosingSetting)
  intentClosingSetting?: UpdateIntentRequestBodyIntentClosingSetting;

  /**
   * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intentConfirmationSetting" })
  @Type(() => UpdateIntentRequestBodyIntentConfirmationSetting)
  intentConfirmationSetting?: UpdateIntentRequestBodyIntentConfirmationSetting;

  /**
   * The new name for the intent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intentName" })
  intentName: string;

  /**
   * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kendraConfiguration" })
  @Type(() => UpdateIntentRequestBodyKendraConfiguration)
  kendraConfiguration?: UpdateIntentRequestBodyKendraConfiguration;

  /**
   * A new list of contexts that Amazon Lex activates when the intent is fulfilled.
   */
  @SpeakeasyMetadata({ elemType: shared.OutputContext })
  @Expose({ name: "outputContexts" })
  @Type(() => shared.OutputContext)
  outputContexts?: shared.OutputContext[];

  /**
   * The signature of the new built-in intent to use as the parent of this intent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentIntentSignature" })
  parentIntentSignature?: string;

  /**
   * New utterances used to invoke the intent.
   */
  @SpeakeasyMetadata({ elemType: shared.SampleUtterance })
  @Expose({ name: "sampleUtterances" })
  @Type(() => shared.SampleUtterance)
  sampleUtterances?: shared.SampleUtterance[];

  /**
   * A new list of slots and their priorities that are contained by the intent.
   */
  @SpeakeasyMetadata({ elemType: shared.SlotPriority })
  @Expose({ name: "slotPriorities" })
  @Type(() => shared.SlotPriority)
  slotPriorities?: shared.SlotPriority[];
}

export class UpdateIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: UpdateIntentRequestBody;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
  })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
  })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Credential",
  })
  xAmzCredential?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Date",
  })
  xAmzDate?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
  })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Signature",
  })
  xAmzSignature?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
  })
  xAmzSignedHeaders?: string;

  /**
   * The identifier of the bot that contains the intent.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=botId",
  })
  botId: string;

  /**
   * The version of the bot that contains the intent. Must be <code>DRAFT</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=botVersion",
  })
  botVersion: string;

  /**
   * The unique identifier of the intent to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=intentId",
  })
  intentId: string;

  /**
   * The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=localeId",
  })
  localeId: string;
}

export class UpdateIntentResponse extends SpeakeasyBase {
  /**
   * ConflictException
   */
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalServerException
   */
  @SpeakeasyMetadata()
  internalServerException?: any;

  /**
   * PreconditionFailedException
   */
  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ServiceQuotaExceededException
   */
  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  updateIntentResponse?: shared.UpdateIntentResponse;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
