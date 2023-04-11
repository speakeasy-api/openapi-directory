import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get categories
     *
     * @remarks
     * Get the list of all the categories in TV & iPlayer.
     */
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Get sub-categories
     *
     * @remarks
     * Get sub-categories
     */
    getSubCategories(req: operations.GetSubCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubCategoriesResponse>;
}
