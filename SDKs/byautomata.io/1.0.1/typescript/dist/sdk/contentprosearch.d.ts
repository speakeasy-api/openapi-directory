import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContentproSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Send search terms to receive the most relevant articles and companies.
     */
    getContentproSearch(req: operations.GetContentproSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetContentproSearchResponse>;
}
