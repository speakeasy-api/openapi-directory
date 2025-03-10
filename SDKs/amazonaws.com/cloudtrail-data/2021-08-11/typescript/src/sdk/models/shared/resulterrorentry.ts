/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Includes the error code and error message for events that could not be ingested by CloudTrail.
 */
export class ResultErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorCode" })
  errorCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
