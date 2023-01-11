import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearchAspectIdFullsearch - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
    **/
    getSearchAspectIdFullsearch(req: operations.GetSearchAspectIdFullsearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchAspectIdFullsearchResponse>;
}
