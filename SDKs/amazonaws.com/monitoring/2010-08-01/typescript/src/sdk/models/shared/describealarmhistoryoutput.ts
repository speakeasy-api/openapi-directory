/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AlarmHistoryItem } from "./alarmhistoryitem";

/**
 * Success
 */
export class DescribeAlarmHistoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AlarmHistoryItem })
  alarmHistoryItems?: AlarmHistoryItem[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
