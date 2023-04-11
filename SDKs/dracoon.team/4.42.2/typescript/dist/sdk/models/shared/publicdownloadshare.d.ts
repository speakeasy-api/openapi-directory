import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { PrivateKeyContainer } from "./privatekeycontainer";
/**
 * Download Share information
 */
export declare class PublicDownloadShare extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * Creator name
     */
    creatorName: string;
    /**
     * Creator username
     */
    creatorUsername?: string;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * File key information
     */
    fileKey?: FileKey;
    /**
     * File name
     */
    fileName: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Determines whether Download Share has a limit for amount of downloads
     */
    hasDownloadLimit: boolean;
    /**
     * Encryption state
     */
    isEncrypted?: boolean;
    /**
     * Is share protected by password
     */
    isProtected: boolean;
    /**
     * Downloads limit reached
     */
    limitReached: boolean;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * * `application/zip` (for folders and rooms)
     *
     * * actual file media type (for files only)
     */
    mediaType: string;
    /**
     * Share display name (alias name)
     */
    name?: string;
    /**
     * User notes
     */
    notes?: string;
    /**
     * Private key container
     */
    privateKeyContainer?: PrivateKeyContainer;
    /**
     * File size or container size not compressed (in bytes)
     */
    size: number;
}
