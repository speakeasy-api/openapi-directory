import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about histories
 */
export declare class History {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List site full action history.
     *
     * @remarks
     * List site full action history.
     */
    historyList(req: operations.HistoryListRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListResponse>;
    /**
     * List history for specific file.
     *
     * @remarks
     * List history for specific file.
     */
    historyListForFile(req: operations.HistoryListForFileRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForFileResponse>;
    /**
     * List history for specific folder.
     *
     * @remarks
     * List history for specific folder.
     */
    historyListForFolder(req: operations.HistoryListForFolderRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForFolderResponse>;
    /**
     * List history for specific user.
     *
     * @remarks
     * List history for specific user.
     */
    historyListForUser(req: operations.HistoryListForUserRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForUserResponse>;
    /**
     * List site login history.
     *
     * @remarks
     * List site login history.
     */
    historyListLogins(req: operations.HistoryListLoginsRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListLoginsResponse>;
}
