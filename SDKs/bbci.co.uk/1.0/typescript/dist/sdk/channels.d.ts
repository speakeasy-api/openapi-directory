import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all the channels.
     *
     * @remarks
     * Get the list of all the channels TV & iPlayer.
     */
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * List the highlights for a channel.
     *
     * @remarks
     * Get the editorial highlights of a given channel in TV & iPlayer.
     */
    getHighlightsByChannel(req: operations.GetHighlightsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByChannelResponse>;
    /**
     * Get schedule by channel
     *
     * @remarks
     * Get schedule by channel
     */
    getScheduleByChannel(req: operations.GetScheduleByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleByChannelResponse>;
}
