import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsExportations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * clearChannelCatalogExportationCache - Clear the exportation cache
    **/
    clearChannelCatalogExportationCache(req: operations.ClearChannelCatalogExportationCacheRequest, config?: AxiosRequestConfig): Promise<operations.ClearChannelCatalogExportationCacheResponse>;
    /**
     * getChannelCatalogExportationCacheInfo - Get the exportation cache information
    **/
    getChannelCatalogExportationCacheInfo(req: operations.GetChannelCatalogExportationCacheInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogExportationCacheInfoResponse>;
    /**
     * getChannelCatalogExportationHistory - Get the exportation history
    **/
    getChannelCatalogExportationHistory(req: operations.GetChannelCatalogExportationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogExportationHistoryResponse>;
}
