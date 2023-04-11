import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Weblog Entry' entry type
 */
export declare class TypeBlogentry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Weblog Entry' entry type
     *
     * @remarks
     * API to search for entries of type Weblog Entry
     */
    searchBlogentry(req: operations.SearchBlogentryRequest, config?: AxiosRequestConfig): Promise<operations.SearchBlogentryResponse>;
}
