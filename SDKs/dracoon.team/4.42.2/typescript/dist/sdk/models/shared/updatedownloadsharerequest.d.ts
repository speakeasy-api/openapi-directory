import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a Download Share
 */
export declare class UpdateDownloadShareRequest extends SpeakeasyBase {
    /**
     * Country shorthand symbol (cf. ISO 3166-2)
     */
    defaultCountry?: string;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Internal notes
     */
    internalNotes?: string;
    /**
     * Max allowed downloads
     */
    maxDownloads?: number;
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
     * Set 'true' to reset 'maxDownloads' for Download Share.
     */
    resetMaxDownloads?: boolean;
    /**
     * Set 'true' to reset 'password' for Download Share.
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
     * List of recipient FQTNs
     *
     * @remarks
     *
     * E.123 / E.164 Format
     */
    textMessageRecipients?: string[];
}
