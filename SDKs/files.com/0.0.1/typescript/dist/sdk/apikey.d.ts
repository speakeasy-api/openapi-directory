import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about api_keys
 */
export declare class ApiKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete current API key.  (Requires current API connection to be using an API key.)
     *
     * @remarks
     * Delete current API key.  (Requires current API connection to be using an API key.)
     */
    apiKeyDeleteCurrent(config?: AxiosRequestConfig): Promise<operations.ApiKeyDeleteCurrentResponse>;
    /**
     * Show information about current API key.  (Requires current API connection to be using an API key.)
     *
     * @remarks
     * Show information about current API key.  (Requires current API connection to be using an API key.)
     */
    apiKeyFindCurrent(config?: AxiosRequestConfig): Promise<operations.ApiKeyFindCurrentResponse>;
    /**
     * Update current API key.  (Requires current API connection to be using an API key.)
     *
     * @remarks
     * Update current API key.  (Requires current API connection to be using an API key.)
     */
    apiKeyUpdateCurrent(req: operations.ApiKeyUpdateCurrentRequestBody, config?: AxiosRequestConfig): Promise<operations.ApiKeyUpdateCurrentResponse>;
}
