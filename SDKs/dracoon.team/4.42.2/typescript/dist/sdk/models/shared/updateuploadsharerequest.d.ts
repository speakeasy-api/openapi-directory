import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating an Upload Share
 */
export declare class UpdateUploadShareRequest extends SpeakeasyBase {
    /**
     * Country shorthand symbol (cf. ISO 3166-2)
     */
    defaultCountry?: string;
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
     * Maximal total size of uploaded files (in bytes)
     */
    maxSize?: number;
    /**
     * Maximal amount of files to upload
     */
    maxSlots?: number;
    /**
     * Alias name
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
     * Set 'true' to reset 'filesExpiryPeriod' for Upload Share
     */
    resetFilesExpiryPeriod?: boolean;
    /**
     * Set 'true' to reset 'maxSize' for Upload Share
     */
    resetMaxSize?: boolean;
    /**
     * Set 'true' to reset 'maxSlots' for Upload Share
     */
    resetMaxSlots?: boolean;
    /**
     * Set 'true' to reset 'password' for Upload Share.
     */
    resetPassword?: boolean;
    /**
     * Show creator first and last name.
     */
    showCreatorName?: boolean;
    /**
     * Show creator email address.
     */
    showCreatorUsername?: boolean;
    /**
     * Allow display of already uploaded files
     */
    showUploadedFiles?: boolean;
    /**
     * List of recipient FQTNs
     *
     * @remarks
     *
     * E.123 / E.164 Format
     */
    textMessageRecipients?: string[];
}
