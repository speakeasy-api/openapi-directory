import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'EIA Category' entry type
 */
export declare class TypeTypeEiaCategory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'EIA Category' entry type
     *
     * @remarks
     * API to search for entries of type EIA Category
     */
    searchTypeEiaCategory(req: operations.SearchTypeEiaCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEiaCategoryResponse>;
}
