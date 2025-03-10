/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { S3Path } from "./s3path";
import { Expose, Type } from "class-transformer";

export class UpdateThesaurusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "IndexId" })
  indexId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RoleArn" })
  roleArn?: string;

  /**
   * Information required to find a specific file in an Amazon S3 bucket.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SourceS3Path" })
  @Type(() => S3Path)
  sourceS3Path?: S3Path;
}
