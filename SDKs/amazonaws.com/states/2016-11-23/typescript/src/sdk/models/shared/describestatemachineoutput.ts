/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { StateMachineStatusEnum } from "./statemachinestatusenum";
import { StateMachineTypeEnum } from "./statemachinetypeenum";
import { TracingConfiguration } from "./tracingconfiguration";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeStateMachineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "creationDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "definition" })
  definition: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  /**
   * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "loggingConfiguration" })
  @Type(() => LoggingConfiguration)
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: StateMachineStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tracingConfiguration" })
  @Type(() => TracingConfiguration)
  tracingConfiguration?: TracingConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: StateMachineTypeEnum;
}
