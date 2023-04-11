import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Storage service allows you to manage your project files.
 */
export declare class Storage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create File
     *
     * @remarks
     * Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
     */
    storageCreateFile(req: operations.StorageCreateFileRequestBody, security: operations.StorageCreateFileSecurity, config?: AxiosRequestConfig): Promise<operations.StorageCreateFileResponse>;
    /**
     * Delete File
     *
     * @remarks
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     */
    storageDeleteFile(req: operations.StorageDeleteFileRequest, security: operations.StorageDeleteFileSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDeleteFileResponse>;
    /**
     * Get File
     *
     * @remarks
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     */
    storageGetFile(req: operations.StorageGetFileRequest, security: operations.StorageGetFileSecurity, config?: AxiosRequestConfig): Promise<operations.StorageGetFileResponse>;
    /**
     * Get File for Download
     *
     * @remarks
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     */
    storageGetFileDownload(req: operations.StorageGetFileDownloadRequest, security: operations.StorageGetFileDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.StorageGetFileDownloadResponse>;
    /**
     * Get File Preview
     *
     * @remarks
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
     */
    storageGetFilePreview(req: operations.StorageGetFilePreviewRequest, security: operations.StorageGetFilePreviewSecurity, config?: AxiosRequestConfig): Promise<operations.StorageGetFilePreviewResponse>;
    /**
     * Get File for View
     *
     * @remarks
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     */
    storageGetFileView(req: operations.StorageGetFileViewRequest, security: operations.StorageGetFileViewSecurity, config?: AxiosRequestConfig): Promise<operations.StorageGetFileViewResponse>;
    /**
     * List Files
     *
     * @remarks
     * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
     */
    storageListFiles(req: operations.StorageListFilesRequest, security: operations.StorageListFilesSecurity, config?: AxiosRequestConfig): Promise<operations.StorageListFilesResponse>;
    /**
     * Update File
     *
     * @remarks
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     */
    storageUpdateFile(req: operations.StorageUpdateFileRequest, security: operations.StorageUpdateFileSecurity, config?: AxiosRequestConfig): Promise<operations.StorageUpdateFileResponse>;
}
