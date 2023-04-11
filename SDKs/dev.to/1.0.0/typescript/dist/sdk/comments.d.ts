import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Comment by id
     *
     * @remarks
     * This endpoint allows the client to retrieve a comment as well as his descendants comments.
     *
     *   It will return the required comment (the root) with its nested descendants as a thread.
     *
     *   See the format specification for further details.
     */
    getCommentById(req: operations.GetCommentByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentByIdResponse>;
    /**
     * Comments
     *
     * @remarks
     * This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.
     *
     * It will return the all top level comments with their nested comments as threads. See the format specification for further details.
     */
    getCommentsByArticleId(req: operations.GetCommentsByArticleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsByArticleIdResponse>;
}
