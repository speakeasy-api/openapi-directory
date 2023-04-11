import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PublicChannelsPublicChannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The channel list for one country
     */
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * Get public channel index
     *
     * @remarks
     * Use this operation to get the correct link to the channels and to the list of values
     */
    getChannelsIndex(req: operations.GetChannelsIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsIndexResponse>;
}
