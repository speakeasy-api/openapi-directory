/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobScheduleDayOfTheWeekEnum } from "./jobscheduledayoftheweekenum";
import { Expose } from "class-transformer";

/**
 * The day and time when do you want to start the Identity Resolution Job every week.
 */
export class JobSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DayOfTheWeek" })
  dayOfTheWeek: JobScheduleDayOfTheWeekEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Time" })
  time: string;
}
