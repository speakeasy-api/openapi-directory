import { SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";
import { MessageSystemAttributeValue } from "./messagesystemattributevalue";
/**
 * <p/>
 */
export declare class SendMessageRequest extends SpeakeasyBase {
    delaySeconds?: number;
    messageAttributes?: Record<string, MessageAttributeValue>;
    messageBody: string;
    messageDeduplicationId?: string;
    messageGroupId?: string;
    messageSystemAttributes?: Record<string, MessageSystemAttributeValue>;
    queueUrl: string;
}
