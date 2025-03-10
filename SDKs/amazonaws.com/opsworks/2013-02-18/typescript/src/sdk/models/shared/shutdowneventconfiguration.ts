/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The Shutdown event configuration.
 */
export class ShutdownEventConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DelayUntilElbConnectionsDrained" })
  delayUntilElbConnectionsDrained?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ExecutionTimeout" })
  executionTimeout?: number;
}
