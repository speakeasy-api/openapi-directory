import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SshKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addSshKey - Create a new SSH Key
     *
     * Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).
     *
     * If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page.
    **/
    addSshKey(req: operations.AddSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddSshKeyResponse>;
    /**
     * deleteSshKey - Delete an SSH Key
     *
     * Delete the specified SSH key. This will not delete or deactivate the user tied to the key.
    **/
    deleteSshKey(req: operations.DeleteSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshKeyResponse>;
    /**
     * getSshKey - Get metadata for an SSH Key
     *
     * Return the information for a single SSH Key
    **/
    getSshKey(req: operations.GetSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeyResponse>;
    /**
     * getSshKeysList - Get metadata for a list of SSH Keys
     *
     * Returns a list of SSH Keys within the account. Can be filtered for a single user.
    **/
    getSshKeysList(req: operations.GetSshKeysListRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysListResponse>;
}
