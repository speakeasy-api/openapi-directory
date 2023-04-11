import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Rating {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all company ESG Ratings
     */
    getSearch(req: operations.GetSearchRequest, security: operations.GetSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
}
