import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Posts {
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
     * delete a single post
     */
    deletePost(req: operations.DeletePostRequest, config?: AxiosRequestConfig): Promise<operations.DeletePostResponse>;
    /**
     * Retrieve a single post
     */
    getPost(req: operations.GetPostRequest, config?: AxiosRequestConfig): Promise<operations.GetPostResponse>;
    /**
     * List latest posts across topics
     */
    listPosts(req: operations.ListPostsRequest, config?: AxiosRequestConfig): Promise<operations.ListPostsResponse>;
    /**
     * Lock a post from being edited
     */
    lockPost(req: operations.LockPostRequest, config?: AxiosRequestConfig): Promise<operations.LockPostResponse>;
    /**
     * Like a post and other actions
     */
    performPostAction(req: operations.PerformPostActionRequest, config?: AxiosRequestConfig): Promise<operations.PerformPostActionResponse>;
    /**
     * List replies to a post
     */
    postReplies(req: operations.PostRepliesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepliesResponse>;
    /**
     * Update a single post
     */
    updatePost(req: operations.UpdatePostRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePostResponse>;
}
