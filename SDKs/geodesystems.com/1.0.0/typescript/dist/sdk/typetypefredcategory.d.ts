import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'FRED Category' entry type
 */
export declare class TypeTypeFredCategory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'FRED Category' entry type
     *
     * @remarks
     * API to search for entries of type FRED Category
     */
    searchTypeFredCategory(req: operations.SearchTypeFredCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeFredCategoryResponse>;
}
