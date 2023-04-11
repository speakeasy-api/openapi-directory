import { SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";
import { MessageSystemAttributeValue } from "./messagesystemattributevalue";
/**
 * Contains the details of a single Amazon SQS message along with an <code>Id</code>.
 */
export declare class SendMessageBatchRequestEntryList extends SpeakeasyBase {
    delaySeconds?: number;
    id: string;
    messageAttributes?: Record<string, MessageAttributeValue>;
    messageBody: string;
    messageDeduplicationId?: string;
    messageGroupId?: string;
    messageSystemAttributes?: Record<string, MessageSystemAttributeValue>;
}
