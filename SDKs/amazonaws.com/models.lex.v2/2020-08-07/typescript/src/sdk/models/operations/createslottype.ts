/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 */
export class CreateSlotTypeRequestBodyCompositeSlotTypeSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.SubSlotTypeComposition })
  @Expose({ name: "subSlots" })
  @Type(() => shared.SubSlotTypeComposition)
  subSlots?: shared.SubSlotTypeComposition[];
}

/**
 * Provides information about the external source of the slot type's definition.
 */
export class CreateSlotTypeRequestBodyExternalSourceSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "grammarSlotTypeSetting" })
  @Type(() => shared.GrammarSlotTypeSetting)
  grammarSlotTypeSetting?: shared.GrammarSlotTypeSetting;
}

/**
 * Contains settings used by Amazon Lex to select a slot value.
 */
export class CreateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "advancedRecognitionSetting" })
  @Type(() => shared.AdvancedRecognitionSetting)
  advancedRecognitionSetting?: shared.AdvancedRecognitionSetting;

  @SpeakeasyMetadata()
  @Expose({ name: "regexFilter" })
  @Type(() => shared.SlotValueRegexFilter)
  regexFilter?: shared.SlotValueRegexFilter;

  @SpeakeasyMetadata()
  @Expose({ name: "resolutionStrategy" })
  resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}

export class CreateSlotTypeRequestBody extends SpeakeasyBase {
  /**
   * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "compositeSlotTypeSetting" })
  @Type(() => CreateSlotTypeRequestBodyCompositeSlotTypeSetting)
  compositeSlotTypeSetting?: CreateSlotTypeRequestBodyCompositeSlotTypeSetting;

  /**
   * A description of the slot type. Use the description to help identify the slot type in lists.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Provides information about the external source of the slot type's definition.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "externalSourceSetting" })
  @Type(() => CreateSlotTypeRequestBodyExternalSourceSetting)
  externalSourceSetting?: CreateSlotTypeRequestBodyExternalSourceSetting;

  /**
   * <p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  /**
   * The name for the slot. A slot type name must be unique within the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "slotTypeName" })
  slotTypeName: string;

  /**
   * A list of <code>SlotTypeValue</code> objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.
   */
  @SpeakeasyMetadata({ elemType: shared.SlotTypeValue })
  @Expose({ name: "slotTypeValues" })
  @Type(() => shared.SlotTypeValue)
  slotTypeValues?: shared.SlotTypeValue[];

  /**
   * Contains settings used by Amazon Lex to select a slot value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "valueSelectionSetting" })
  @Type(() => CreateSlotTypeRequestBodyValueSelectionSetting)
  valueSelectionSetting?: CreateSlotTypeRequestBodyValueSelectionSetting;
}

export class CreateSlotTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: CreateSlotTypeRequestBody;

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
   * The identifier of the bot associated with this slot type.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=botId",
  })
  botId: string;

  /**
   * The identifier of the bot version associated with this slot type.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=botVersion",
  })
  botVersion: string;

  /**
   * The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=localeId",
  })
  localeId: string;
}

export class CreateSlotTypeResponse extends SpeakeasyBase {
  /**
   * ConflictException
   */
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createSlotTypeResponse?: shared.CreateSlotTypeResponse;

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

  /**
   * ServiceQuotaExceededException
   */
  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
