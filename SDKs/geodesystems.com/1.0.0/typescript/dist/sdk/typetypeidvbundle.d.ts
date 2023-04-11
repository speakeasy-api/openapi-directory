import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'IDV Bundle' entry type
 */
export declare class TypeTypeIdvBundle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'IDV Bundle' entry type
     *
     * @remarks
     * API to search for entries of type IDV Bundle
     */
    searchTypeIdvBundle(req: operations.SearchTypeIdvBundleRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeIdvBundleResponse>;
}
