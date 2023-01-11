import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportChannelCatalogProductInfoList - Export channel catalog product information list
    **/
    exportChannelCatalogProductInfoList(req: operations.ExportChannelCatalogProductInfoListRequest, config?: AxiosRequestConfig): Promise<operations.ExportChannelCatalogProductInfoListResponse>;
    /**
     * getChannelCatalogProductByChannelCatalog - Get channel catalog products related to these channel catalogs
    **/
    getChannelCatalogProductByChannelCatalog(req: operations.GetChannelCatalogProductByChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductByChannelCatalogResponse>;
    /**
     * getChannelCatalogProductInfo - Get channel catalog product information
    **/
    getChannelCatalogProductInfo(req: operations.GetChannelCatalogProductInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductInfoResponse>;
    /**
     * getChannelCatalogProductInfoList - Get channel catalog product information list
    **/
    getChannelCatalogProductInfoList(req: operations.GetChannelCatalogProductInfoListRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductInfoListResponse>;
    /**
     * getChannelCatalogProductsCounters - Get channel catalog products' counters
    **/
    getChannelCatalogProductsCounters(req: operations.GetChannelCatalogProductsCountersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductsCountersResponse>;
}
