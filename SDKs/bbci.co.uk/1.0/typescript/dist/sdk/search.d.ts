import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search-suggest
     *
     * @remarks
     * Search-suggest
     */
    searchSuggest(req: operations.SearchSuggestRequest, config?: AxiosRequestConfig): Promise<operations.SearchSuggestResponse>;
    /**
     * Search
     *
     * @remarks
     * Search
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
}
