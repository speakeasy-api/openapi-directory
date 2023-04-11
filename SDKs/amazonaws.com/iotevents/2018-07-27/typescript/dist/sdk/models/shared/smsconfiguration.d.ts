import { SpeakeasyBase } from "../../../internal/utils";
import { RecipientDetail } from "./recipientdetail";
/**
 * Contains the configuration information of SMS notifications.
 */
export declare class SMSConfiguration extends SpeakeasyBase {
    additionalMessage?: string;
    recipients: RecipientDetail[];
    senderId?: string;
}
