/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class CreateUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "importId" })
  importId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uploadUrl" })
  uploadUrl?: string;
}
