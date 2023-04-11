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
     * Creates a category
     */
    createCategory(req: operations.CreateCategoryRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateCategoryResponse>;
    /**
     * Show category
     */
    getCategory(req: operations.GetCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
    /**
     * Get site info
     *
     * @remarks
     * Can be used to fetch all categories and subcategories
     */
    getSite(config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * Retrieves a list of categories
     */
    listCategories(req: operations.ListCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListCategoriesResponse>;
    /**
     * List topics
     */
    listCategoryTopics(req: operations.ListCategoryTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ListCategoryTopicsResponse>;
    /**
     * Updates a category
     */
    updateCategory(req: operations.UpdateCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCategoryResponse>;
}
