import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Topics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bookmark topic
     */
    bookmarkTopic(req: operations.BookmarkTopicRequest, config?: AxiosRequestConfig): Promise<operations.BookmarkTopicResponse>;
    /**
     * Creates a new topic, a new post, or a private message
     */
    createTopicPostPM(req: operations.CreateTopicPostPMRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateTopicPostPMResponse>;
    /**
     * Create topic timer
     */
    createTopicTimer(req: operations.CreateTopicTimerRequest, config?: AxiosRequestConfig): Promise<operations.CreateTopicTimerResponse>;
    /**
     * Get a single topic
     */
    getTopic(req: operations.GetTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicResponse>;
    /**
     * Get topic by external_id
     */
    getTopicByExternalId(req: operations.GetTopicByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicByExternalIdResponse>;
    /**
     * Invite to topic
     */
    inviteToTopic(req: operations.InviteToTopicRequest, config?: AxiosRequestConfig): Promise<operations.InviteToTopicResponse>;
    /**
     * Get the latest topics
     */
    listLatestTopics(req: operations.ListLatestTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ListLatestTopicsResponse>;
    /**
     * Get the top topics filtered by period
     */
    listTopTopics(req: operations.ListTopTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ListTopTopicsResponse>;
    /**
     * Remove a topic
     */
    removeTopic(req: operations.RemoveTopicRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTopicResponse>;
    /**
     * Set notification level
     */
    setNotificationLevel(req: operations.SetNotificationLevelRequest, config?: AxiosRequestConfig): Promise<operations.SetNotificationLevelResponse>;
    /**
     * Update a topic
     */
    updateTopic(req: operations.UpdateTopicRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTopicResponse>;
    /**
     * Update the status of a topic
     */
    updateTopicStatus(req: operations.UpdateTopicStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTopicStatusResponse>;
    /**
     * Update topic timestamp
     */
    updateTopicTimestamp(req: operations.UpdateTopicTimestampRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTopicTimestampResponse>;
}
