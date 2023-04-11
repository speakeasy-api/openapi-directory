import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Service Link' entry type
 */
export declare class TypeTypeServiceLink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Service Link' entry type
     *
     * @remarks
     * API to search for entries of type Service Link
     */
    searchTypeServiceLink(req: operations.SearchTypeServiceLinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeServiceLinkResponse>;
}
