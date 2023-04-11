import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsCreateInstallationAccessTokenRequestBody extends SpeakeasyBase {
    /**
     * The permissions granted to the user-to-server access token.
     */
    permissions?: shared.AppPermissions;
    /**
     * List of repository names that the token should have access to
     */
    repositories?: string[];
    /**
     * List of repository IDs that the token should have access to
     */
    repositoryIds?: number[];
}
export declare class AppsCreateInstallationAccessTokenRequest extends SpeakeasyBase {
    requestBody?: AppsCreateInstallationAccessTokenRequestBody;
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    /**
     * installation_id parameter
     */
    installationId: number;
}
/**
 * Preview header missing
 */
export declare class AppsCreateInstallationAccessToken415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsCreateInstallationAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Preview header missing
     */
    appsCreateInstallationAccessToken415ApplicationJSONObject?: AppsCreateInstallationAccessToken415ApplicationJSON;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    installationToken?: shared.InstallationToken;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
