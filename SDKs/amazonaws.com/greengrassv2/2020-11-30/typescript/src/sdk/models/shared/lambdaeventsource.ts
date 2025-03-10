/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LambdaEventSourceTypeEnum } from "./lambdaeventsourcetypeenum";
import { Expose } from "class-transformer";

/**
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
 */
export class LambdaEventSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "topic" })
  topic: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: LambdaEventSourceTypeEnum;
}
