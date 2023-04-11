import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'RSS/ATOM Feed' entry type
 */
export declare class TypeFeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'RSS/ATOM Feed' entry type
     *
     * @remarks
     * API to search for entries of type RSS/ATOM Feed
     */
    searchFeed(req: operations.SearchFeedRequest, config?: AxiosRequestConfig): Promise<operations.SearchFeedResponse>;
}
