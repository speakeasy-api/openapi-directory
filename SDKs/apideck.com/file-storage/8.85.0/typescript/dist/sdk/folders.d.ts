import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Folders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * foldersAdd - Create Folder
     *
     * Create Folder
    **/
    foldersAdd(req: operations.FoldersAddRequest, config?: AxiosRequestConfig): Promise<operations.FoldersAddResponse>;
    /**
     * foldersCopy - Copy Folder
     *
     * Copy Folder
    **/
    foldersCopy(req: operations.FoldersCopyRequest, config?: AxiosRequestConfig): Promise<operations.FoldersCopyResponse>;
    /**
     * foldersDelete - Delete Folder
     *
     * Delete Folder
    **/
    foldersDelete(req: operations.FoldersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FoldersDeleteResponse>;
    /**
     * foldersOne - Get Folder
     *
     * Get Folder
    **/
    foldersOne(req: operations.FoldersOneRequest, config?: AxiosRequestConfig): Promise<operations.FoldersOneResponse>;
    /**
     * foldersUpdate - Rename or move Folder
     *
     * Rename or move Folder
    **/
    foldersUpdate(req: operations.FoldersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FoldersUpdateResponse>;
}
