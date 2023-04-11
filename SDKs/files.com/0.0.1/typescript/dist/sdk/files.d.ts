import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about files
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
     * Delete file/folder
     *
     * @remarks
     * Delete file/folder
     */
    deleteFilesPath(req: operations.DeleteFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesPathResponse>;
    /**
     * Download file
     *
     * @remarks
     * Download file
     */
    fileDownload(req: operations.FileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FileDownloadResponse>;
    /**
     * Update file/folder metadata
     *
     * @remarks
     * Update file/folder metadata
     */
    patchFilesPath(req: operations.PatchFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.PatchFilesPathResponse>;
    /**
     * Upload file
     *
     * @remarks
     * Upload file
     */
    postFilesPath(req: operations.PostFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesPathResponse>;
}
