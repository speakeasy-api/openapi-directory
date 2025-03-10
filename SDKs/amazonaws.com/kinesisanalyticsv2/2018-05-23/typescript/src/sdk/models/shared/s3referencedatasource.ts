/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
 */
export class S3ReferenceDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "BucketARN" })
  bucketARN?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "FileKey" })
  fileKey?: string;
}
