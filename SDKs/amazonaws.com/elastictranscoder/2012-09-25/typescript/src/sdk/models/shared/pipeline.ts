/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Notifications } from "./notifications";
import { PipelineOutputConfig } from "./pipelineoutputconfig";
import { Expose, Type } from "class-transformer";

/**
 * The pipeline (queue) that is used to manage jobs.
 */
export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Arn" })
  arn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ContentConfig" })
  @Type(() => PipelineOutputConfig)
  contentConfig?: PipelineOutputConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "Id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "InputBucket" })
  inputBucket?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Notifications" })
  @Type(() => Notifications)
  notifications?: Notifications;

  @SpeakeasyMetadata()
  @Expose({ name: "OutputBucket" })
  outputBucket?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Role" })
  role?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ThumbnailConfig" })
  @Type(() => PipelineOutputConfig)
  thumbnailConfig?: PipelineOutputConfig;
}
