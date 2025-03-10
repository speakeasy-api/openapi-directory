/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MessageFormatEnum } from "./messageformatenum";
import { Expose } from "class-transformer";

/**
 * Describes an action to publish to an Amazon SNS topic.
 */
export class SnsAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "messageFormat" })
  messageFormat?: MessageFormatEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetArn" })
  targetArn: string;
}
