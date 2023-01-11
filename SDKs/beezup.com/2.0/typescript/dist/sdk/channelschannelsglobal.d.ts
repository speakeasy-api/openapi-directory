import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsChannelsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAvailableChannels - List all available channel for this store
    **/
    getAvailableChannels(req: operations.GetAvailableChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableChannelsResponse>;
    /**
     * getChannelCategories - Get channel categories
    **/
    getChannelCategories(req: operations.GetChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCategoriesResponse>;
    /**
     * getChannelColumns - Get channel columns
    **/
    getChannelColumns(req: operations.GetChannelColumnsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelColumnsResponse>;
    /**
     * getChannelInfo - Get channel information
    **/
    getChannelInfo(req: operations.GetChannelInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelInfoResponse>;
}
