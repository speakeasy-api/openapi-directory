/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class CreateReplicationSetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "arn" })
  arn: string;
}
