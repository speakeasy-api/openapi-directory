import { SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";
/**
 * An Amazon SQS message.
 */
export declare class MessageList extends SpeakeasyBase {
    attributes?: Record<string, string>;
    body?: string;
    md5OfBody?: string;
    md5OfMessageAttributes?: string;
    messageAttributes?: Record<string, MessageAttributeValue>;
    messageId?: string;
    receiptHandle?: string;
}
