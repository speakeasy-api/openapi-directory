import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAppsAppIdKeys - Lists app keys
     *
     * Lists the API keys associated with the application ID.
    **/
    getAppsAppIdKeys(req: operations.GetAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdKeysResponse>;
    /**
     * patchAppsAppIdKeysKeyId - Updates a key
     *
     * Update the API key with the specified key ID, for the application with the specified application ID.
    **/
    patchAppsAppIdKeysKeyId(req: operations.PatchAppsAppIdKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdKeysKeyIdResponse>;
    /**
     * postAppsAppIdKeys - Creates a key
     *
     * Creates an API key for the application specified.
    **/
    postAppsAppIdKeys(req: operations.PostAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysResponse>;
    /**
     * postAppsAppIdKeysKeyIdRevoke - Revokes a key
     *
     * Revokes the API key with the specified ID, with the Application ID. This deletes the key.
    **/
    postAppsAppIdKeysKeyIdRevoke(req: operations.PostAppsAppIdKeysKeyIdRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysKeyIdRevokeResponse>;
}
