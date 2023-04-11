import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * forum
 */
export declare class Forum {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a listing of all topics marked as part of the core group.
     */
    forumGetCoreTopicsPaged(req: operations.ForumGetCoreTopicsPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetCoreTopicsPagedResponse>;
    /**
     * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
     */
    forumGetForumTagSuggestions(req: operations.ForumGetForumTagSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetForumTagSuggestionsResponse>;
    /**
     * Gets the specified forum poll.
     */
    forumGetPoll(req: operations.ForumGetPollRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPollResponse>;
    /**
     * Returns the post specified and its immediate parent.
     */
    forumGetPostAndParent(req: operations.ForumGetPostAndParentRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostAndParentResponse>;
    /**
     * Returns the post specified and its immediate parent of posts that are awaiting approval.
     */
    forumGetPostAndParentAwaitingApproval(req: operations.ForumGetPostAndParentAwaitingApprovalRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostAndParentAwaitingApprovalResponse>;
    /**
     * Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
     */
    forumGetPostsThreadedPaged(req: operations.ForumGetPostsThreadedPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostsThreadedPagedResponse>;
    /**
     * Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
     */
    forumGetPostsThreadedPagedFromChild(req: operations.ForumGetPostsThreadedPagedFromChildRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostsThreadedPagedFromChildResponse>;
    /**
     * Allows the caller to get a list of to 25 recruitment thread summary information objects.
     */
    forumGetRecruitmentThreadSummaries(config?: AxiosRequestConfig): Promise<operations.ForumGetRecruitmentThreadSummariesResponse>;
    /**
     * Gets the post Id for the given content item's comments, if it exists.
     */
    forumGetTopicForContent(req: operations.ForumGetTopicForContentRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetTopicForContentResponse>;
    /**
     * Get topics from any forum.
     */
    forumGetTopicsPaged(req: operations.ForumGetTopicsPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetTopicsPagedResponse>;
}
