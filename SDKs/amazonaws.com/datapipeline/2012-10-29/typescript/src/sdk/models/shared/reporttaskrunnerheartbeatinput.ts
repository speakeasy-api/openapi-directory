/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains the parameters for ReportTaskRunnerHeartbeat.
 */
export class ReportTaskRunnerHeartbeatInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hostname" })
  hostname?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taskrunnerId" })
  taskrunnerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workerGroup" })
  workerGroup?: string;
}
