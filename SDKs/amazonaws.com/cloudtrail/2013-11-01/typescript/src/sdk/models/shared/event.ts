/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Resource } from "./resource";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
 */
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AccessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "CloudTrailEvent" })
  cloudTrailEvent?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EventId" })
  eventId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EventName" })
  eventName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EventSource" })
  eventSource?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EventTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  eventTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "ReadOnly" })
  readOnly?: string;

  @SpeakeasyMetadata({ elemType: Resource })
  @Expose({ name: "Resources" })
  @Type(() => Resource)
  resources?: Resource[];

  @SpeakeasyMetadata()
  @Expose({ name: "Username" })
  username?: string;
}
