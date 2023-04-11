import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostInboxRecipientsRequestBody extends SpeakeasyBase {
    /**
     * Company of recipient.
     */
    company?: string;
    /**
     * Inbox to share.
     */
    inboxId: number;
    /**
     * Name of recipient.
     */
    name?: string;
    /**
     * Note to include in email.
     */
    note?: string;
    /**
     * Email address to share this inbox with.
     */
    recipient: string;
    /**
     * Set to true to share the link with the recipient upon creation.
     */
    shareAfterCreate?: boolean;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostInboxRecipientsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The InboxRecipients object.
     */
    inboxRecipientEntity?: shared.InboxRecipientEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
