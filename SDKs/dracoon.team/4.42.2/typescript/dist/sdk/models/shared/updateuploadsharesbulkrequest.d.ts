import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a list of Download Shares
 */
export declare class UpdateUploadSharesBulkRequest extends SpeakeasyBase {
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * Number of days after which uploaded files expire
     */
    filesExpiryPeriod?: number;
    /**
     * Maximal total size of uploaded files (in bytes)
     */
    maxSize?: number;
    /**
     * Maximal amount of files to upload
     */
    maxSlots?: number;
    /**
     * List of ids
     */
    objectIds: number[];
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
}
