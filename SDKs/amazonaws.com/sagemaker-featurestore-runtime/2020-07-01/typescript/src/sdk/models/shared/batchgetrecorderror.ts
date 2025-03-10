/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The error that has occurred when attempting to retrieve a batch of Records.
 */
export class BatchGetRecordError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ErrorCode" })
  errorCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ErrorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata()
  @Expose({ name: "FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}
