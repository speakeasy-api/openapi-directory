import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.
 *
 * @remarks
 *
 */
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get current user profile
     *
     * @remarks
     * Get details about the current authenticated User.
     *
     */
    getAuthenticatedUser(req: operations.GetAuthenticatedUserRequest, security: operations.GetAuthenticatedUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetAuthenticatedUserResponse>;
}
