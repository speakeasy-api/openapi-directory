import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
 */
export declare enum PostUsersUserIdApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PostUsersUserIdApiKeysRequestBody extends SpeakeasyBase {
    /**
     * User-supplied description of API key.
     */
    description?: string;
    /**
     * API Key expiration date
     */
    expiresAt?: Date;
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
    permissionSet?: PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
}
export declare class PostUsersUserIdApiKeysRequest extends SpeakeasyBase {
    requestBody?: PostUsersUserIdApiKeysRequestBody;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId: number;
}
export declare class PostUsersUserIdApiKeysResponse extends SpeakeasyBase {
    /**
     * The ApiKeys object.
     */
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
