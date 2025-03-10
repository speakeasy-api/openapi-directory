/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Provides output results configuration parameters for custom classifier jobs.
 */
export class DocumentClassifierOutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "FlywheelStatsS3Prefix" })
  flywheelStatsS3Prefix?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "S3Uri" })
  s3Uri?: string;
}
