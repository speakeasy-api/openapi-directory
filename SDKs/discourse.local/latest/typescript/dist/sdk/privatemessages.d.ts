import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PrivateMessages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new topic, a new post, or a private message
     */
    createTopicPostPM(req: operations.CreateTopicPostPMRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateTopicPostPMResponse>;
    /**
     * Get a list of private messages sent for a user
     */
    getUserSentPrivateMessages(req: operations.GetUserSentPrivateMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserSentPrivateMessagesResponse>;
    /**
     * Get a list of private messages for a user
     */
    listUserPrivateMessages(req: operations.ListUserPrivateMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserPrivateMessagesResponse>;
}
