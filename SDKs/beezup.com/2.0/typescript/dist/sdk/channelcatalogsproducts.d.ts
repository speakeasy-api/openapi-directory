import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export channel catalog product information list
     */
    exportChannelCatalogProductInfoList(req: operations.ExportChannelCatalogProductInfoListRequest, config?: AxiosRequestConfig): Promise<operations.ExportChannelCatalogProductInfoListResponse>;
    /**
     * Get channel catalog products related to these channel catalogs
     */
    getChannelCatalogProductByChannelCatalog(req: shared.ChannelCatalogProductByChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductByChannelCatalogResponse>;
    /**
     * Get channel catalog product information
     */
    getChannelCatalogProductInfo(req: operations.GetChannelCatalogProductInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductInfoResponse>;
    /**
     * Get channel catalog product information list
     */
    getChannelCatalogProductInfoList(req: operations.GetChannelCatalogProductInfoListRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductInfoListResponse>;
    /**
     * Get channel catalog products' counters
     */
    getChannelCatalogProductsCounters(req: operations.GetChannelCatalogProductsCountersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductsCountersResponse>;
}
