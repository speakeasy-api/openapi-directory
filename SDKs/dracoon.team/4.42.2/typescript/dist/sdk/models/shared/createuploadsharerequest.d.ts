import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for creating an Upload Share
 */
export declare class CreateUploadShareRequest extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.20.0
     *
     * @remarks
     *
     * Language tag for messages to creator
     */
    creatorLanguage?: string;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * Number of days after which uploaded files expire
     */
    filesExpiryPeriod?: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Internal notes
     */
    internalNotes?: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Notification email content
     */
    mailBody?: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * CSV string of recipient email addresses
     */
    mailRecipients?: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Notification email subject
     */
    mailSubject?: string;
    /**
     * Maximal total size of uploaded files (in bytes)
     */
    maxSize?: number;
    /**
     * Maximal amount of files to upload
     */
    maxSlots?: number;
    /**
     * Alias name
     *
     * @remarks
     *
     * (default: name of the shared node)
     */
    name?: string;
    /**
     * User notes
     */
    notes?: string;
    /**
     * &#128679; Deprecated since v4.20.0
     *
     * @remarks
     *
     * Notify creator on every upload.
     */
    notifyCreator?: boolean;
    /**
     * Password
     */
    password?: string;
    /**
     * Language tag for messages to receiver
     */
    receiverLanguage?: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Notify recipients via email
     *
     * Please use `POST /shares/uploads/{share_id}/email` API instead.
     */
    sendMail?: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Send share password via SMS
     *
     * Please use `textMessageRecipients` attribute instead.
     */
    sendSms?: boolean;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Show creator first and last name.
     */
    showCreatorName?: boolean;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Show creator email address.
     */
    showCreatorUsername?: boolean;
    /**
     * Allow display of already uploaded files
     */
    showUploadedFiles?: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * CSV string of recipient MSISDNs
     */
    smsRecipients?: string;
    /**
     * Target room or folder ID
     */
    targetId: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * List of recipient FQTNs
     *
     * E.123 / E.164 Format
     */
    textMessageRecipients?: string[];
}
