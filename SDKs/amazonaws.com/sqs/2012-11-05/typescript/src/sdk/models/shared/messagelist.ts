import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";



// MessageList
/** 
 * An Amazon SQS message.
**/
export class MessageList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributes?: Record<string, string>;

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  md5OfBody?: string;

  @SpeakeasyMetadata()
  md5OfMessageAttributes?: string;

  @SpeakeasyMetadata({ elemType: MessageAttributeValue })
  messageAttributes?: Record<string, MessageAttributeValue>;

  @SpeakeasyMetadata()
  messageId?: string;

  @SpeakeasyMetadata()
  receiptHandle?: string;
}
