/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class UpdateModelCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ModelCardArn" })
  modelCardArn: string;
}
