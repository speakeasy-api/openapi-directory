/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
import { Expose } from "class-transformer";

/**
 *  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
 */
export class FrameMetric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "frameName" })
  frameName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "threadStates" })
  threadStates: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: MetricTypeEnum;
}
