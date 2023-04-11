import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * user-specific methods
 */
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get User Extensions
     *
     * @remarks
     * This endpoint allows you to get list of your extensions including extensions from the watchlist.
     */
    getUserExtensions(config?: AxiosRequestConfig): Promise<operations.GetUserExtensionsResponse>;
}
