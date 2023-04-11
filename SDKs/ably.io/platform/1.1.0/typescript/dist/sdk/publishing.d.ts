import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Publishing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Publish a message to a channel
     *
     * @remarks
     * Publish a message to the specified channel
     */
    publishMessagesToChannelForm(req: operations.PublishMessagesToChannelFormRequest, config?: AxiosRequestConfig): Promise<operations.PublishMessagesToChannelFormResponse>;
    /**
     * Publish a message to a channel
     *
     * @remarks
     * Publish a message to the specified channel
     */
    publishMessagesToChannelJson(req: operations.PublishMessagesToChannelJsonRequest, config?: AxiosRequestConfig): Promise<operations.PublishMessagesToChannelJsonResponse>;
    /**
     * Publish a message to a channel
     *
     * @remarks
     * Publish a message to the specified channel
     */
    publishMessagesToChannelRaw(req: operations.PublishMessagesToChannelRawRequest, config?: AxiosRequestConfig): Promise<operations.PublishMessagesToChannelRawResponse>;
}
