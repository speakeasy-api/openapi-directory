import { SpeakeasyBase } from "../../../internal/utils";
import { PublicUploadedFileData } from "./publicuploadedfiledata";
import { UserUserPublicKeyList } from "./useruserpublickeylist";
/**
 * Upload Share information
 */
export declare class PublicUploadShare extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Creator name
     */
    creatorName: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Creator username
     */
    creatorUsername?: string;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * Encryption state
     */
    isEncrypted?: boolean;
    /**
     * Is share protected by password
     */
    isProtected: boolean;
    /**
     * Share display name (alias name)
     */
    name?: string;
    /**
     * User notes
     */
    notes?: string;
    /**
     * Remaining size
     */
    remainingSize?: number;
    /**
     * Remaining slots
     */
    remainingSlots?: number;
    /**
     * Allow display of already uploaded files
     */
    showUploadedFiles?: boolean;
    /**
     * List of (public) uploaded files
     */
    uploadedFiles?: PublicUploadedFileData[];
    /**
     * List of user public keys
     */
    userUserPublicKeyList?: UserUserPublicKeyList;
}
