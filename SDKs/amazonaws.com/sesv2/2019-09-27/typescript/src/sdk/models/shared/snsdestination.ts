/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
 */
export class SnsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "TopicArn" })
  topicArn: string;
}
