/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "TagKeys" })
  tagKeys: string[];
}
