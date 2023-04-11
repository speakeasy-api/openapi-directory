import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure channel catalog category
     */
    configureChannelCatalogCategory(req: operations.ConfigureChannelCatalogCategoryRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogCategoryResponse>;
    /**
     * Disable a channel catalog category mapping
     */
    disableChannelCatalogCategoryMapping(req: operations.DisableChannelCatalogCategoryMappingRequest, config?: AxiosRequestConfig): Promise<operations.DisableChannelCatalogCategoryMappingResponse>;
    /**
     * Get channel catalog categories
     */
    getChannelCatalogCategories(req: operations.GetChannelCatalogCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogCategoriesResponse>;
    /**
     * Reenable a channel catalog category mapping
     */
    reenableChannelCatalogCategoryMapping(req: operations.ReenableChannelCatalogCategoryMappingRequest, config?: AxiosRequestConfig): Promise<operations.ReenableChannelCatalogCategoryMappingResponse>;
}
