import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authentication related
 */
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the credentials associated with the authenticated user.
     */
    getCredentials(config?: AxiosRequestConfig): Promise<operations.GetCredentialsResponse>;
    /**
     * Scopes
     *
     * @remarks
     * List available token scopes
     */
    getScopes(config?: AxiosRequestConfig): Promise<operations.GetScopesResponse>;
    /**
     * Verify token and return details of the owning user
     */
    postVerify(config?: AxiosRequestConfig): Promise<operations.PostVerifyResponse>;
}
