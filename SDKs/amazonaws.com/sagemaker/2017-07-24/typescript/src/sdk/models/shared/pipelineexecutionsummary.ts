/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { Expose, Transform } from "class-transformer";

/**
 * A pipeline execution summary.
 */
export class PipelineExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PipelineExecutionFailureReason" })
  pipelineExecutionFailureReason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PipelineExecutionStatus" })
  pipelineExecutionStatus?: PipelineExecutionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "StartTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime?: Date;
}
