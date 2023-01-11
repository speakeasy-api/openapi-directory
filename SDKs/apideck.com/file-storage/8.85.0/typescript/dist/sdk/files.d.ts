import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * filesAll - List Files
     *
     * List Files
    **/
    filesAll(req: operations.FilesAllRequest, config?: AxiosRequestConfig): Promise<operations.FilesAllResponse>;
    /**
     * filesDelete - Delete File
     *
     * Delete File
    **/
    filesDelete(req: operations.FilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FilesDeleteResponse>;
    /**
     * filesDownload - Download File
     *
     * Download File
    **/
    filesDownload(req: operations.FilesDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FilesDownloadResponse>;
    /**
     * filesOne - Get File
     *
     * Get File
    **/
    filesOne(req: operations.FilesOneRequest, config?: AxiosRequestConfig): Promise<operations.FilesOneResponse>;
    /**
     * filesSearch - Search Files
     *
     * Search Files
    **/
    filesSearch(req: operations.FilesSearchRequest, config?: AxiosRequestConfig): Promise<operations.FilesSearchResponse>;
}
