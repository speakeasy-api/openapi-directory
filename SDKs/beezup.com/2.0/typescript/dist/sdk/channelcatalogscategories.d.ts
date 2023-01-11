import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * configureChannelCatalogCategory - Configure channel catalog category
    **/
    configureChannelCatalogCategory(req: operations.ConfigureChannelCatalogCategoryRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogCategoryResponse>;
    /**
     * disableChannelCatalogCategoryMapping - Disable a channel catalog category mapping
    **/
    disableChannelCatalogCategoryMapping(req: operations.DisableChannelCatalogCategoryMappingRequest, config?: AxiosRequestConfig): Promise<operations.DisableChannelCatalogCategoryMappingResponse>;
    /**
     * getChannelCatalogCategories - Get channel catalog categories
    **/
    getChannelCatalogCategories(req: operations.GetChannelCatalogCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogCategoriesResponse>;
    /**
     * reenableChannelCatalogCategoryMapping - Reenable a channel catalog category mapping
    **/
    reenableChannelCatalogCategoryMapping(req: operations.ReenableChannelCatalogCategoryMappingRequest, config?: AxiosRequestConfig): Promise<operations.ReenableChannelCatalogCategoryMappingResponse>;
}
