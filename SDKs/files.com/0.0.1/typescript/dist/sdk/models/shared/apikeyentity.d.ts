import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
 */
export declare enum ApiKeyEntityPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
/**
 * List Api Keys
 */
export declare class ApiKeyEntity extends SpeakeasyBase {
    /**
     * Time which API Key was created
     */
    createdAt?: Date;
    /**
     * User-supplied description of API key.
     */
    description?: string;
    /**
     * Unique label that describes this API key.  Useful for external systems where you may have API keys from multiple accounts and want a human-readable label for each key.
     */
    descriptiveLabel?: string;
    /**
     * API Key expiration date
     */
    expiresAt?: Date;
    /**
     * API Key ID
     */
    id?: number;
    /**
     * API Key actual key string
     */
    key?: string;
    /**
     * API Key last used - note this value is only updated once per 3 hour period, so the 'actual' time of last use may be up to 3 hours later than this timestamp.
     */
    lastUseAt?: Date;
    /**
     * Internal name for the API Key.  For your use.
     */
    name?: string;
    /**
     * Folder path restriction for this api key.
     */
    path?: string;
    /**
     * Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
     */
    permissionSet?: ApiKeyEntityPermissionSetEnum;
    /**
     * If this API key represents a Desktop app, what platform was it created on?
     */
    platform?: string;
    /**
     * URL for API host.
     */
    url?: string;
    /**
     * User ID for the owner of this API Key.  May be blank for Site-wide API Keys.
     */
    userId?: number;
}
