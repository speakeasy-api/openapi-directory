import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about file_comments
 */
export declare class FileComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete File Comment
     *
     * @remarks
     * Delete File Comment
     */
    deleteFileCommentsId(req: operations.DeleteFileCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileCommentsIdResponse>;
    /**
     * List File Comments by path
     *
     * @remarks
     * List File Comments by path
     */
    fileCommentListForPath(req: operations.FileCommentListForPathRequest, config?: AxiosRequestConfig): Promise<operations.FileCommentListForPathResponse>;
    /**
     * Update File Comment
     *
     * @remarks
     * Update File Comment
     */
    patchFileCommentsId(req: operations.PatchFileCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchFileCommentsIdResponse>;
    /**
     * Create File Comment
     *
     * @remarks
     * Create File Comment
     */
    postFileComments(req: operations.PostFileCommentsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostFileCommentsResponse>;
}
