import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsExclusionFilters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure channel catalog exclusion filters
     */
    configureChannelCatalogExclusionFilters(req: operations.ConfigureChannelCatalogExclusionFiltersRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogExclusionFiltersResponse>;
    /**
     * Get channel catalog exclusion filters
     */
    getChannelCatalogExclusionFilters(req: operations.GetChannelCatalogExclusionFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogExclusionFiltersResponse>;
}
