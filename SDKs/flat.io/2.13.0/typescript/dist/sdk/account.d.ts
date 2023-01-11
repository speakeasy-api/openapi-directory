import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAuthenticatedUser - Get current user profile
     *
     * Get details about the current authenticated User.
     *
    **/
    getAuthenticatedUser(req: operations.GetAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthenticatedUserResponse>;
}
