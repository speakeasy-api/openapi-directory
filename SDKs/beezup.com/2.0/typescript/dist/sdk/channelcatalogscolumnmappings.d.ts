import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsColumnMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure channel catalog column mappings
     */
    configureChannelCatalogColumnMappings(req: operations.ConfigureChannelCatalogColumnMappingsRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogColumnMappingsResponse>;
}
