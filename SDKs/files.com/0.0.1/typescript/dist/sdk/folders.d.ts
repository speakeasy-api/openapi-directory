import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about folders
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
     * List Folders by path
     *
     * @remarks
     * List Folders by path
     */
    folderListForPath(req: operations.FolderListForPathRequest, config?: AxiosRequestConfig): Promise<operations.FolderListForPathResponse>;
    /**
     * Create folder
     *
     * @remarks
     * Create folder
     */
    postFoldersPath(req: operations.PostFoldersPathRequest, config?: AxiosRequestConfig): Promise<operations.PostFoldersPathResponse>;
}
