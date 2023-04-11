import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Category {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List categories
     *
     * @remarks
     * List categories
     */
    categoriesAll(req: operations.CategoriesAllRequest, config?: AxiosRequestConfig): Promise<operations.CategoriesAllResponse>;
    /**
     * Get category
     *
     * @remarks
     * Get category
     */
    categoriesOne(req: operations.CategoriesOneRequest, config?: AxiosRequestConfig): Promise<operations.CategoriesOneResponse>;
    /**
     * List category listings
     *
     * @remarks
     * List category listings
     */
    categoryListingsAll(req: operations.CategoryListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.CategoryListingsAllResponse>;
}
