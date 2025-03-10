/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AlarmCapabilities } from "./alarmcapabilities";
import { AlarmEventActions } from "./alarmeventactions";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
import { AlarmNotification } from "./alarmnotification";
import { AlarmRule } from "./alarmrule";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alarmCapabilities" })
  @Type(() => AlarmCapabilities)
  alarmCapabilities?: AlarmCapabilities;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmEventActions" })
  @Type(() => AlarmEventActions)
  alarmEventActions?: AlarmEventActions;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelArn" })
  alarmModelArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelDescription" })
  alarmModelDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmNotification" })
  @Type(() => AlarmNotification)
  alarmNotification?: AlarmNotification;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmRule" })
  @Type(() => AlarmRule)
  alarmRule?: AlarmRule;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "severity" })
  severity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: AlarmModelVersionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusMessage" })
  statusMessage?: string;
}
