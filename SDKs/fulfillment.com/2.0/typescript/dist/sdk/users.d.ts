import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * About Me
     *
     * @remarks
     * Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.
     */
    getUsersMe(config?: AxiosRequestConfig): Promise<operations.GetUsersMeResponse>;
}
