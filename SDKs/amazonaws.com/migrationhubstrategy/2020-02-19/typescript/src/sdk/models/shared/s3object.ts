/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  Contains the S3 bucket name and the Amazon S3 key name.
 */
export class S3Object extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "s3key" })
  s3key?: string;
}
