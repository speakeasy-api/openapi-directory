import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * &#128679; Deprecated since v4.11.0
 *
 * @remarks
 *
 * Classification ID:
 *
 * * `1` - public
 *
 * * `2` - internal
 *
 * * `3` - confidential
 *
 * * `4` - strictly confidential
 *
 *
 *
 * (default: classification from parent room)
 */
export declare enum DownloadShareClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Download Share information
 */
export declare class DownloadShare extends SpeakeasyBase {
    /**
     * Share access key to generate secure link
     */
    accessKey: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Classification ID:
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     *
     *
     *
     * (default: classification from parent room)
     */
    classification?: DownloadShareClassificationEnum;
    /**
     * Downloads counter (incremented on each download)
     */
    cntDownloads: number;
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * User information
     */
    createdBy: UserInfo;
    /**
     * Path to shared download node
     */
    dataUrl?: string;
    /**
     * Expiration date
     */
    expireAt?: Date;
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
     * Encrypted share
     *
     * @remarks
     *
     * (this only applies to shared files, not folders)
     */
    isEncrypted?: boolean;
    /**
     * Is share protected by password
     */
    isProtected?: boolean;
    /**
     * Max allowed downloads
     */
    maxDownloads?: number;
    /**
     * Alias name
     */
    name: string;
    /**
     * Source node ID
     */
    nodeId: number;
    /**
     * Path to shared download node
     */
    nodePath?: string;
    /**
     * Node type
     */
    nodeType?: string;
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
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
