import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about file_comment_reactions
 */
export declare class FileCommentReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete File Comment Reaction
     *
     * @remarks
     * Delete File Comment Reaction
     */
    deleteFileCommentReactionsId(req: operations.DeleteFileCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileCommentReactionsIdResponse>;
    /**
     * Create File Comment Reaction
     *
     * @remarks
     * Create File Comment Reaction
     */
    postFileCommentReactions(req: operations.PostFileCommentReactionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostFileCommentReactionsResponse>;
}
