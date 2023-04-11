import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * THe SSH Keys APIs allow you to manage SSH keys for users in your account. You can upload the contents of a public key for a user, get information for keys which are already defined, and remove a key from a user.
 */
export declare class SSHKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new SSH Key
     *
     * @remarks
     * Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).
     *
     * If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page.
     */
    addSSHKey(req: operations.AddSSHKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddSSHKeyResponse>;
    /**
     * Delete an SSH Key
     *
     * @remarks
     * Delete the specified SSH key. This will not delete or deactivate the user tied to the key.
     */
    deleteSSHKey(req: operations.DeleteSSHKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSSHKeyResponse>;
    /**
     * Get metadata for an SSH Key
     *
     * @remarks
     * Return the information for a single SSH Key
     */
    getSSHKey(req: operations.GetSSHKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSSHKeyResponse>;
    /**
     * Get metadata for a list of SSH Keys
     *
     * @remarks
     * Returns a list of SSH Keys within the account. Can be filtered for a single user.
     */
    getSSHKeysList(req: operations.GetSSHKeysListRequest, config?: AxiosRequestConfig): Promise<operations.GetSSHKeysListResponse>;
}
