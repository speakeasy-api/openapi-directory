/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListPipelineExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PipelineExecutionSummary })
  @Expose({ name: "PipelineExecutionSummaries" })
  @Type(() => PipelineExecutionSummary)
  pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
