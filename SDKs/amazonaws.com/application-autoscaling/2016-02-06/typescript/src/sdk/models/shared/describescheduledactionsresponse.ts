/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ScheduledAction } from "./scheduledaction";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeScheduledActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ScheduledAction })
  @Expose({ name: "ScheduledActions" })
  @Type(() => ScheduledAction)
  scheduledActions?: ScheduledAction[];
}
