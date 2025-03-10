/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PipelineTypeEnum } from "./pipelinetypeenum";
import { Expose } from "class-transformer";

/**
 * Detailed information of the pipeline.
 */
export class PipelineInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pipelineConfigurationTimeStamp" })
  pipelineConfigurationTimeStamp?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pipelineType" })
  pipelineType?: PipelineTypeEnum;
}
