import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations related to users.
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get current user
     *
     * @remarks
     * Returns information about the currently authenticated user.
     */
    getCurrentUserInfo(config?: AxiosRequestConfig): Promise<operations.GetCurrentUserInfoResponse>;
}
