import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RecallSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRecallHistory - Recall info by vin
     *
     * Get a particular recall information for a vin
    **/
    getRecallHistory(req: operations.GetRecallHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetRecallHistoryResponse>;
}
