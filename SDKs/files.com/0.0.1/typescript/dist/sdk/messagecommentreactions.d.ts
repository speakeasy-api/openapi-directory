import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about message_comment_reactions
 */
export declare class MessageCommentReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Message Comment Reaction
     *
     * @remarks
     * Delete Message Comment Reaction
     */
    deleteMessageCommentReactionsId(req: operations.DeleteMessageCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageCommentReactionsIdResponse>;
    /**
     * List Message Comment Reactions
     *
     * @remarks
     * List Message Comment Reactions
     */
    getMessageCommentReactions(req: operations.GetMessageCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentReactionsResponse>;
    /**
     * Show Message Comment Reaction
     *
     * @remarks
     * Show Message Comment Reaction
     */
    getMessageCommentReactionsId(req: operations.GetMessageCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentReactionsIdResponse>;
    /**
     * Create Message Comment Reaction
     *
     * @remarks
     * Create Message Comment Reaction
     */
    postMessageCommentReactions(req: operations.PostMessageCommentReactionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostMessageCommentReactionsResponse>;
}
