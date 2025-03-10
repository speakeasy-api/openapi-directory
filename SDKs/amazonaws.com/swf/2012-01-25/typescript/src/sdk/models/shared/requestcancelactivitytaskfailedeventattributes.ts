/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCancelActivityTaskFailedCauseEnum } from "./requestcancelactivitytaskfailedcauseenum";
import { Expose } from "class-transformer";

/**
 * Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
 */
export class RequestCancelActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "activityId" })
  activityId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "cause" })
  cause: RequestCancelActivityTaskFailedCauseEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
