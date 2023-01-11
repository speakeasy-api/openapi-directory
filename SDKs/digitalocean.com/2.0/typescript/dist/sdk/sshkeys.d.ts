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
     * createSshKey - Create a New SSH Key
     *
     * To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.
    **/
    createSshKey(req: operations.CreateSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateSshKeyResponse>;
    /**
     * destroySshKey - Delete an SSH Key
     *
     * To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
     * A 204 status will be returned, indicating that the action was successful and that the response body is empty.
    **/
    destroySshKey(req: operations.DestroySshKeyRequest, config?: AxiosRequestConfig): Promise<operations.DestroySshKeyResponse>;
    /**
     * getSshKey - Retrieve an Existing SSH Key
     *
     * To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
     * The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.
    **/
    getSshKey(req: operations.GetSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeyResponse>;
    /**
     * listAllKeys - List All SSH Keys
     *
     * To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.
    **/
    listAllKeys(req: operations.ListAllKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListAllKeysResponse>;
    /**
     * updateSshKey - Update an SSH Key's Name
     *
     * To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.
    **/
    updateSshKey(req: operations.UpdateSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSshKeyResponse>;
}
