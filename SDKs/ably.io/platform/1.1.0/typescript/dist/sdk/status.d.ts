import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Enumerate all active channels of the application
     *
     * @remarks
     * Enumerate all active channels of the application
     */
    getMetadataOfAllChannels(req: operations.GetMetadataOfAllChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataOfAllChannelsResponse>;
    /**
     * Get metadata of a channel
     *
     * @remarks
     * Get metadata of a channel
     */
    getMetadataOfChannel(req: operations.GetMetadataOfChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataOfChannelResponse>;
    /**
     * Get presence of a channel
     *
     * @remarks
     * Get presence on a channel
     */
    getPresenceOfChannel(req: operations.GetPresenceOfChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceOfChannelResponse>;
}
