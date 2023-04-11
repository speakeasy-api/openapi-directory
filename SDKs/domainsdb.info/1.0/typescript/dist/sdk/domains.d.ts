import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Domains Database
 */
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download Whole Dataset for TLD
     */
    getDomainsTldZoneIdDownload(req: operations.GetDomainsTldZoneIdDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdDownloadResponse>;
    /**
     * Domains Search for TLD
     */
    getDomainsTldZoneIdSearch(req: operations.GetDomainsTldZoneIdSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdSearchResponse>;
    /**
     * Get added domains, latest if date not specified
     */
    getDomainsUpdatesAdded(req: operations.GetDomainsUpdatesAddedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedResponse>;
    /**
     * Download added domains, latest if date not specified
     */
    getDomainsUpdatesAddedDownload(req: operations.GetDomainsUpdatesAddedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedDownloadResponse>;
    /**
     * Get deleted domains, latest if date not specified
     */
    getDomainsUpdatesDeleted(req: operations.GetDomainsUpdatesDeletedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedResponse>;
    /**
     * Download deleted domains, latest if date not specified
     */
    getDomainsUpdatesDeletedDownload(req: operations.GetDomainsUpdatesDeletedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedDownloadResponse>;
    /**
     * List of updates
     */
    getDomainsUpdatesList(req: operations.GetDomainsUpdatesListRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesListResponse>;
    /**
     * Domains Database Search
     */
    getSearchDomainItem(req: operations.GetSearchDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchDomainItemResponse>;
    /**
     * Get TLD records
     */
    getTldDomainItem(req: operations.GetTldDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetTldDomainItemResponse>;
}
