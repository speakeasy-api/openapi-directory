import { SpeakeasyBase } from "../../../internal/utils";
import { BouncedRecipientInfo } from "./bouncedrecipientinfo";
import { MessageDsn } from "./messagedsn";
/**
 * Represents a request to send a bounce message to the sender of an email you received through Amazon SES.
 */
export declare class SendBounceRequest extends SpeakeasyBase {
    bounceSender: string;
    bounceSenderArn?: string;
    bouncedRecipientInfoList: BouncedRecipientInfo[];
    explanation?: string;
    messageDsn?: MessageDsn;
    originalMessageId: string;
}
