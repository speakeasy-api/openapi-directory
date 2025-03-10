/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
import { Expose, Transform } from "class-transformer";

/**
 * Success
 */
export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelArn" })
  alarmModelArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: AlarmModelVersionStatusEnum;
}
