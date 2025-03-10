/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { Expose } from "class-transformer";

/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
 */
export class APNSPushNotificationTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Body" })
  body?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "MediaUrl" })
  mediaUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Sound" })
  sound?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Url" })
  url?: string;
}
