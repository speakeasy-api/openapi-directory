/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The total resources consumed by your hyperparameter tuning job.
 */
export class HyperParameterTuningJobConsumedResources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "RuntimeInSeconds" })
  runtimeInSeconds?: number;
}
