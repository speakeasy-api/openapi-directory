import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authentication-related endpoints
 */
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Log in to get an API token
     *
     * @remarks
     * Submit your email and password to get an API token
     */
    postLogin(req: operations.PostLoginSample, config?: AxiosRequestConfig): Promise<operations.PostLoginResponse>;
    /**
     * Log out
     *
     * @remarks
     * Log out by deleting your token off the server.
     */
    postLogout(config?: AxiosRequestConfig): Promise<operations.PostLogoutResponse>;
}
