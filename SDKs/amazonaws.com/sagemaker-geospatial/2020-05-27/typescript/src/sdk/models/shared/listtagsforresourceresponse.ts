/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Tags" })
  tags?: Record<string, string>;
}
