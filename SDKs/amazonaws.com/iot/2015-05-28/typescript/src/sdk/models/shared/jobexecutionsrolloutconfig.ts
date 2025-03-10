/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExponentialRolloutRate } from "./exponentialrolloutrate";
import { Expose, Type } from "class-transformer";

/**
 * Allows you to create a staged rollout of a job.
 */
export class JobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "exponentialRate" })
  @Type(() => ExponentialRolloutRate)
  exponentialRate?: ExponentialRolloutRate;

  @SpeakeasyMetadata()
  @Expose({ name: "maximumPerMinute" })
  maximumPerMinute?: number;
}
