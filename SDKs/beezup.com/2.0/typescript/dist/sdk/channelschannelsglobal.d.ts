import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsChannelsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all available channel for this store
     */
    getAvailableChannels(req: operations.GetAvailableChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableChannelsResponse>;
    /**
     * Get channel categories
     */
    getChannelCategories(req: operations.GetChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCategoriesResponse>;
    /**
     * Get channel columns
     */
    getChannelColumns(req: operations.GetChannelColumnsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelColumnsResponse>;
    /**
     * Get channel information
     */
    getChannelInfo(req: operations.GetChannelInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelInfoResponse>;
}
