import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get Shakespeare Works via API
 *
 * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
 */
export declare class Works {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a random Shakespeare quote.
     */
    getShakespeareQuote(config?: AxiosRequestConfig): Promise<operations.GetShakespeareQuoteResponse>;
}
