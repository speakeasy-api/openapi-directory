/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";
import { Expose } from "class-transformer";

/**
 * Represents the input for <a>DisableEnhancedMonitoring</a>.
 */
export class DisableEnhancedMonitoringInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ShardLevelMetrics" })
  shardLevelMetrics: MetricsNameEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "StreamARN" })
  streamARN?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "StreamName" })
  streamName?: string;
}
