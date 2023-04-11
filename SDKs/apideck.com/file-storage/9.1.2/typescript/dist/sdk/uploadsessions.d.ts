import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Upload sessions resource represents the sessions used for uploading files to the cloud storage service. It provides methods for managing and accessing the upload sessions, such as creating and resuming upload sessions. An upload session allows for efficient uploading of large files by breaking them into smaller chunks and uploading each chunk individually.
 */
export declare class UploadSessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Start Upload Session
     *
     * @remarks
     * Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
     */
    uploadSessionsAdd(req: operations.UploadSessionsAddRequest, security: operations.UploadSessionsAddSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UploadSessionsAddResponse>;
    /**
     * Abort Upload Session
     *
     * @remarks
     * Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
     */
    uploadSessionsDelete(req: operations.UploadSessionsDeleteRequest, security: operations.UploadSessionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UploadSessionsDeleteResponse>;
    /**
     * Finish Upload Session
     *
     * @remarks
     * Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
     */
    uploadSessionsFinish(req: operations.UploadSessionsFinishRequest, security: operations.UploadSessionsFinishSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UploadSessionsFinishResponse>;
    /**
     * Get Upload Session
     *
     * @remarks
     * Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
     */
    uploadSessionsOne(req: operations.UploadSessionsOneRequest, security: operations.UploadSessionsOneSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UploadSessionsOneResponse>;
    /**
     * Upload part of File to Upload Session
     *
     * @remarks
     * Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
     */
    uploadSessionsUpload(req: operations.UploadSessionsUploadRequest, security: operations.UploadSessionsUploadSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UploadSessionsUploadResponse>;
}
