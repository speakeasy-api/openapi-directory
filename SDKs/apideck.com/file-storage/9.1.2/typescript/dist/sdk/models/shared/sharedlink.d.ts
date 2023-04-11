import { SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkTarget } from "./sharedlinktarget";
/**
 * The scope of the shared link.
 */
export declare enum SharedLinkScopeEnum {
    Public = "public",
    Company = "company"
}
export declare class SharedLinkInput extends SpeakeasyBase {
    /**
     * The URL that can be used to download the file.
     */
    downloadUrl?: string;
    /**
     * Optional password for the shared link.
     */
    password?: string;
    /**
     * The scope of the shared link.
     */
    scope?: SharedLinkScopeEnum;
    /**
     * The ID of the file or folder to link.
     */
    targetId: string;
}
export declare class SharedLinkOutput extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The URL that can be used to download the file.
     */
    downloadUrl?: string;
    expiresAt?: Date;
    /**
     * Indicated if the shared link is password protected.
     */
    passwordProtected?: boolean;
    /**
     * The scope of the shared link.
     */
    scope?: SharedLinkScopeEnum;
    target?: SharedLinkTarget;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The URL that can be used to view the file.
     */
    url?: string;
}
