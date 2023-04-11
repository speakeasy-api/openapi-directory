import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about sftp_host_keys
 */
export declare class SftpHostKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Sftp Host Key
     *
     * @remarks
     * Delete Sftp Host Key
     */
    deleteSftpHostKeysId(req: operations.DeleteSftpHostKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSftpHostKeysIdResponse>;
    /**
     * List Sftp Host Keys
     *
     * @remarks
     * List Sftp Host Keys
     */
    getSftpHostKeys(req: operations.GetSftpHostKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSftpHostKeysResponse>;
    /**
     * Show Sftp Host Key
     *
     * @remarks
     * Show Sftp Host Key
     */
    getSftpHostKeysId(req: operations.GetSftpHostKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSftpHostKeysIdResponse>;
    /**
     * Update Sftp Host Key
     *
     * @remarks
     * Update Sftp Host Key
     */
    patchSftpHostKeysId(req: operations.PatchSftpHostKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSftpHostKeysIdResponse>;
    /**
     * Create Sftp Host Key
     *
     * @remarks
     * Create Sftp Host Key
     */
    postSftpHostKeys(req: operations.PostSftpHostKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSftpHostKeysResponse>;
}
