import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Bookmarks' entry type
 */
export declare class TypeBookmarks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Bookmarks' entry type
     *
     * @remarks
     * API to search for entries of type Bookmarks
     */
    searchBookmarks(req: operations.SearchBookmarksRequest, config?: AxiosRequestConfig): Promise<operations.SearchBookmarksResponse>;
}
