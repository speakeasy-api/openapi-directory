/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MessageList } from "./messagelist";

/**
 * A list of received messages.
 */
export class ReceiveMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MessageList })
  messages?: MessageList[];
}
