import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Folders resource represents the folders within a drive in the cloud storage service. It provides methods for managing and accessing the folders, such as creating, deleting, and listing files & folders in a given folder.
 */
export declare class Folders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Folder
     *
     * @remarks
     * Create Folder
     */
    foldersAdd(req: operations.FoldersAddRequest, security: operations.FoldersAddSecurity, config?: AxiosRequestConfig): Promise<operations.FoldersAddResponse>;
    /**
     * Copy Folder
     *
     * @remarks
     * Copy Folder
     */
    foldersCopy(req: operations.FoldersCopyRequest, security: operations.FoldersCopySecurity, config?: AxiosRequestConfig): Promise<operations.FoldersCopyResponse>;
    /**
     * Delete Folder
     *
     * @remarks
     * Delete Folder
     */
    foldersDelete(req: operations.FoldersDeleteRequest, security: operations.FoldersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FoldersDeleteResponse>;
    /**
     * Get Folder
     *
     * @remarks
     * Get Folder
     */
    foldersOne(req: operations.FoldersOneRequest, security: operations.FoldersOneSecurity, config?: AxiosRequestConfig): Promise<operations.FoldersOneResponse>;
    /**
     * Rename or move Folder
     *
     * @remarks
     * Rename or move Folder
     */
    foldersUpdate(req: operations.FoldersUpdateRequest, security: operations.FoldersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FoldersUpdateResponse>;
}
