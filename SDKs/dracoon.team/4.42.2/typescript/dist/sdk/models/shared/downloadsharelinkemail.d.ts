import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for sending an email of a Download Share link
 */
export declare class DownloadShareLinkEmail extends SpeakeasyBase {
    /**
     * Notification email content
     */
    body: string;
    /**
     * Language tag for messages to receiver
     */
    receiverLanguage?: string;
    /**
     * List of recipient email addresses
     */
    recipients: string[];
}
