import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get a random interesting fact about a number.
 *
 * @see {@link http://fungenerators.com/api/facts#number} - Find out more
 */
export declare class NumberFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a random fact about a number
     */
    getFactNumbers(req: operations.GetFactNumbersRequest, security: operations.GetFactNumbersSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactNumbersResponse>;
}
