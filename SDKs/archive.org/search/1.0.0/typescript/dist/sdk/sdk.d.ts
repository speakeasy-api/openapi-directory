import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.archive.org"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * API for Internet Archive's Search-related services
 *
 * @remarks
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Fields that can be requested
     */
    getSearchV1Fields(req: operations.GetSearchV1FieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1FieldsResponse>;
    /**
     * Return relevance-based results from search queries
     *
     */
    getSearchV1Organic(req: operations.GetSearchV1OrganicRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1OrganicResponse>;
    /**
     * Scrape search results from Internet Archive, allowing a scrolling cursor
     *
     */
    getSearchV1Scrape(req: operations.GetSearchV1ScrapeRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1ScrapeResponse>;
}
