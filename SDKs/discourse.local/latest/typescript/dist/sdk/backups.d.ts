import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Backups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create backup
     */
    createBackup(req: operations.CreateBackupRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateBackupResponse>;
    /**
     * Download backup
     */
    downloadBackup(req: operations.DownloadBackupRequest, config?: AxiosRequestConfig): Promise<operations.DownloadBackupResponse>;
    /**
     * List backups
     */
    getBackups(config?: AxiosRequestConfig): Promise<operations.GetBackupsResponse>;
    /**
     * Send download backup email
     */
    sendDownloadBackupEmail(req: operations.SendDownloadBackupEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendDownloadBackupEmailResponse>;
}
