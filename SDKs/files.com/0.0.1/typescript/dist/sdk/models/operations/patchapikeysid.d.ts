import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
 */
export declare enum PatchApiKeysIdRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PatchApiKeysIdRequestBody extends SpeakeasyBase {
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
     * Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
     */
    permissionSet?: PatchApiKeysIdRequestBodyPermissionSetEnum;
}
export declare class PatchApiKeysIdRequest extends SpeakeasyBase {
    requestBody?: PatchApiKeysIdRequestBody;
    /**
     * Api Key ID.
     */
    id: number;
}
export declare class PatchApiKeysIdResponse extends SpeakeasyBase {
    /**
     * The ApiKeys object.
     */
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
