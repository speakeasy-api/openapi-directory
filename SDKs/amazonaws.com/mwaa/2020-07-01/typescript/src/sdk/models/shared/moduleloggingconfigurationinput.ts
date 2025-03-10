/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
import { Expose } from "class-transformer";

/**
 * Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).
 */
export class ModuleLoggingConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Enabled" })
  enabled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "LogLevel" })
  logLevel: LoggingLevelEnum;
}
