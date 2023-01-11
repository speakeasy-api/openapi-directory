import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UploadSessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * uploadSessionsAdd - Start Upload Session
     *
     * Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB).
    **/
    uploadSessionsAdd(req: operations.UploadSessionsAddRequest, config?: AxiosRequestConfig): Promise<operations.UploadSessionsAddResponse>;
    /**
     * uploadSessionsDelete - Abort Upload Session
     *
     * Abort Upload Session
    **/
    uploadSessionsDelete(req: operations.UploadSessionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UploadSessionsDeleteResponse>;
    /**
     * uploadSessionsFinish - Finish Upload Session
     *
     * Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload).
    **/
    uploadSessionsFinish(req: operations.UploadSessionsFinishRequest, config?: AxiosRequestConfig): Promise<operations.UploadSessionsFinishResponse>;
    /**
     * uploadSessionsOne - Get Upload Session
     *
     * Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint.
    **/
    uploadSessionsOne(req: operations.UploadSessionsOneRequest, config?: AxiosRequestConfig): Promise<operations.UploadSessionsOneResponse>;
    /**
     * uploadSessionsUpload - Upload part of File to Upload Session
     *
     * Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`.
    **/
    uploadSessionsUpload(req: operations.UploadSessionsUploadRequest, config?: AxiosRequestConfig): Promise<operations.UploadSessionsUploadResponse>;
}
