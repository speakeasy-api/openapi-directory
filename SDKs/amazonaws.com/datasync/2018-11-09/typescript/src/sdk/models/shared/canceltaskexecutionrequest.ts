/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * CancelTaskExecutionRequest
 */
export class CancelTaskExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "TaskExecutionArn" })
  taskExecutionArn: string;
}
