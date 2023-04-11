import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { ObjectExpiration } from "./objectexpiration";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for creating a Download Share
 */
export declare class CreateDownloadShareRequest extends SpeakeasyBase {
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
     * File key information
     */
    fileKey?: FileKey;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Internal notes
     */
    internalNotes?: string;
    /**
     * Key pair container
     */
    keyPair?: UserKeyPairContainer;
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
     * Max allowed downloads
     */
    maxDownloads?: number;
    /**
     * Alias name
     *
     * @remarks
     *
     * (default: name of the shared node)
     */
    name?: string;
    /**
     * Source node ID
     */
    nodeId: number;
    /**
     * User notes
     */
    notes?: string;
    /**
     * &#128679; Deprecated since v4.20.0
     *
     * @remarks
     *
     * Notify creator on every download.
     */
    notifyCreator?: boolean;
    /**
     * Access password, not allowed for encrypted shares
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
     * Please use `POST /shares/downloads/{share_id}/email` API instead.
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
     * Show creator first and last name.
     */
    showCreatorName?: boolean;
    /**
     * Show creator email address.
     */
    showCreatorUsername?: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * CSV string of recipient MSISDNs
     */
    smsRecipients?: string;
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
