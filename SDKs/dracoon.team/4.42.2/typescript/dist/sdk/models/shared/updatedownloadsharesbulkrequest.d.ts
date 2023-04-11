import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a list of Download Shares
 */
export declare class UpdateDownloadSharesBulkRequest extends SpeakeasyBase {
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * Max allowed downloads
     */
    maxDownloads?: number;
    /**
     * List of ids
     */
    objectIds: number[];
    /**
     * Set 'true' to reset 'maxDownloads' for Download Share.
     */
    resetMaxDownloads?: boolean;
    /**
     * Show creator first and last name.
     */
    showCreatorName?: boolean;
    /**
     * Show creator email address.
     */
    showCreatorUsername?: boolean;
}
