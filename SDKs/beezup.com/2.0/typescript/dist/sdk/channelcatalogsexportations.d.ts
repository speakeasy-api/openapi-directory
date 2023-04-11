import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsExportations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clear the exportation cache
     */
    clearChannelCatalogExportationCache(req: operations.ClearChannelCatalogExportationCacheRequest, config?: AxiosRequestConfig): Promise<operations.ClearChannelCatalogExportationCacheResponse>;
    /**
     * Get the exportation cache information
     */
    getChannelCatalogExportationCacheInfo(req: operations.GetChannelCatalogExportationCacheInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogExportationCacheInfoResponse>;
    /**
     * Get the exportation history
     */
    getChannelCatalogExportationHistory(req: operations.GetChannelCatalogExportationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogExportationHistoryResponse>;
}
