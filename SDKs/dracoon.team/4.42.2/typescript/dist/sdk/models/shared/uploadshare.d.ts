import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Upload Share information
 */
export declare class UploadShare extends SpeakeasyBase {
    /**
     * Share access key to generate secure link
     */
    accessKey: string;
    /**
     * Total amount of existing files uploaded with this share.
     */
    cntFiles?: number;
    /**
     * Total amount of uploads conducted with this share.
     */
    cntUploads?: number;
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * User information
     */
    createdBy: UserInfo;
    /**
     * Upload Share URL
     */
    dataUrl?: string;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * Number of days after which uploaded files expire
     */
    filesExpiryPeriod?: number;
    /**
     * Share ID
     */
    id: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Internal notes
     */
    internalNotes?: string;
    /**
     * Encryption state
     */
    isEncrypted?: boolean;
    /**
     * Is share protected by password
     */
    isProtected: boolean;
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
    name: string;
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
    notifyCreator: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * CSV string of recipient email addresses
     */
    recipients?: string;
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
     * Path to shared upload node
     */
    targetPath?: string;
    /**
     * Node type
     */
    targetType?: string;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
