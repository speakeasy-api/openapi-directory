import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Order Accounting
     *
     * @remarks
     * Retrieves accounting activity during the queried timespan.
     */
    getAccounting(req: operations.GetAccountingRequest, security: operations.GetAccountingSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountingResponse>;
}
