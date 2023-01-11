import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMetadataOfAllChannels - Enumerate all active channels of the application
     *
     * Enumerate all active channels of the application
    **/
    getMetadataOfAllChannels(req: operations.GetMetadataOfAllChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataOfAllChannelsResponse>;
    /**
     * getMetadataOfChannel - Get metadata of a channel
     *
     * Get metadata of a channel
    **/
    getMetadataOfChannel(req: operations.GetMetadataOfChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataOfChannelResponse>;
    /**
     * getPresenceOfChannel - Get presence of a channel
     *
     * Get presence on a channel
    **/
    getPresenceOfChannel(req: operations.GetPresenceOfChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceOfChannelResponse>;
}
