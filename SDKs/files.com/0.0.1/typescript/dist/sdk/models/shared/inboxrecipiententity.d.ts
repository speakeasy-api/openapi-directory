import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Inbox Recipients
 */
export declare class InboxRecipientEntity extends SpeakeasyBase {
    /**
     * The recipient's company.
     */
    company?: string;
    /**
     * The recipient's name.
     */
    name?: string;
    /**
     * A note sent to the recipient with the inbox.
     */
    note?: string;
    /**
     * The recipient's email address.
     */
    recipient?: string;
    /**
     * When the Inbox was shared with this recipient.
     */
    sentAt?: Date;
}
