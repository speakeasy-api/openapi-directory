import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Code Search
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Searches through source code
     *
     * @remarks
     * Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).
     *
     * Search results are ordered by their ranking (best results come first).
     */
    search(req: operations.SearchRequest, security: operations.SearchSecurity, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Like /search, but aggregates per package
     *
     * @remarks
     * The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719
     */
    searchperpackage(req: operations.SearchperpackageRequest, security: operations.SearchperpackageSecurity, config?: AxiosRequestConfig): Promise<operations.SearchperpackageResponse>;
}
