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
     * The unique identifier of the installation.
     */
    installationId: number;
}
export declare class AppsCreateInstallationAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    installationToken?: shared.InstallationToken;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
