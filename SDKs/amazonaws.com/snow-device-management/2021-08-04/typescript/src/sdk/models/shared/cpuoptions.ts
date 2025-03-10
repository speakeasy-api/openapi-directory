/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The options for how a device's CPU is configured.
 */
export class CpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "coreCount" })
  coreCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "threadsPerCore" })
  threadsPerCore?: number;
}
