import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about message_comments
 */
export declare class MessageComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Message Comment
     *
     * @remarks
     * Delete Message Comment
     */
    deleteMessageCommentsId(req: operations.DeleteMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageCommentsIdResponse>;
    /**
     * List Message Comments
     *
     * @remarks
     * List Message Comments
     */
    getMessageComments(req: operations.GetMessageCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentsResponse>;
    /**
     * Show Message Comment
     *
     * @remarks
     * Show Message Comment
     */
    getMessageCommentsId(req: operations.GetMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentsIdResponse>;
    /**
     * Update Message Comment
     *
     * @remarks
     * Update Message Comment
     */
    patchMessageCommentsId(req: operations.PatchMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchMessageCommentsIdResponse>;
    /**
     * Create Message Comment
     *
     * @remarks
     * Create Message Comment
     */
    postMessageComments(req: operations.PostMessageCommentsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostMessageCommentsResponse>;
}
