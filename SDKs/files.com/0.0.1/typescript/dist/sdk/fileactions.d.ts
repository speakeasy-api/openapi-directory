import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about file_actions
 */
export declare class FileActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Begin file upload
     *
     * @remarks
     * Begin file upload
     */
    fileActionBeginUpload(req: operations.FileActionBeginUploadRequest, config?: AxiosRequestConfig): Promise<operations.FileActionBeginUploadResponse>;
    /**
     * Copy file/folder
     *
     * @remarks
     * Copy file/folder
     */
    fileActionCopy(req: operations.FileActionCopyRequest, config?: AxiosRequestConfig): Promise<operations.FileActionCopyResponse>;
    /**
     * Find file/folder by path
     *
     * @remarks
     * Find file/folder by path
     */
    fileActionFind(req: operations.FileActionFindRequest, config?: AxiosRequestConfig): Promise<operations.FileActionFindResponse>;
    /**
     * Move file/folder
     *
     * @remarks
     * Move file/folder
     */
    fileActionMove(req: operations.FileActionMoveRequest, config?: AxiosRequestConfig): Promise<operations.FileActionMoveResponse>;
}
