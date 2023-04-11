import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access API Request Activity
 */
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of API Requests that have been made.
     */
    getApiActivity(req: operations.GetApiActivityRequest, security: operations.GetApiActivitySecurity, config?: AxiosRequestConfig): Promise<operations.GetApiActivityResponse>;
}
