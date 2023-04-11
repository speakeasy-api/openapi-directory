import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Files resource represents files stored in the cloud storage services. It provides methods for managing and accessing the files, such as uploading, downloading, and deleting files. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
 */
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Files
     *
     * @remarks
     * List Files
     */
    filesAll(req: operations.FilesAllRequest, security: operations.FilesAllSecurity, config?: AxiosRequestConfig): Promise<operations.FilesAllResponse>;
    /**
     * Delete File
     *
     * @remarks
     * Delete File
     */
    filesDelete(req: operations.FilesDeleteRequest, security: operations.FilesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FilesDeleteResponse>;
    /**
     * Download File
     *
     * @remarks
     * Download File
     */
    filesDownload(req: operations.FilesDownloadRequest, security: operations.FilesDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.FilesDownloadResponse>;
    /**
     * Get File
     *
     * @remarks
     * Get File
     */
    filesOne(req: operations.FilesOneRequest, security: operations.FilesOneSecurity, config?: AxiosRequestConfig): Promise<operations.FilesOneResponse>;
    /**
     * Search Files
     *
     * @remarks
     * Search Files
     */
    filesSearch(req: operations.FilesSearchRequest, security: operations.FilesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.FilesSearchResponse>;
    /**
     * Rename or move File
     *
     * @remarks
     * Rename or move File
     */
    filesUpdate(req: operations.FilesUpdateRequest, security: operations.FilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FilesUpdateResponse>;
}
