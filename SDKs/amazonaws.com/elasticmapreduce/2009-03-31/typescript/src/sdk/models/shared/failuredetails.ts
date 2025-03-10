/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The details of the step failure. The service attempts to detect the root cause for many common failures.
 */
export class FailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "LogFile" })
  logFile?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Reason" })
  reason?: string;
}
