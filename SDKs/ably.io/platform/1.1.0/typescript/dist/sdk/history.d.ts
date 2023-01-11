import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class History {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMessagesByChannel - Get message history for a channel
     *
     * Get message history for a channel
    **/
    getMessagesByChannel(req: operations.GetMessagesByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesByChannelResponse>;
    /**
     * getPresenceHistoryOfChannel - Get presence history of a channel
     *
     * Get presence on a channel
    **/
    getPresenceHistoryOfChannel(req: operations.GetPresenceHistoryOfChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceHistoryOfChannelResponse>;
}
