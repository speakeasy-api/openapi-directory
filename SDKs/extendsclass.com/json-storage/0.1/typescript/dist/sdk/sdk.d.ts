import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://extendsclass.com/api/json-storage"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * JSON storage API
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Delete a json bin
     */
    deleteBinId(req: operations.DeleteBinIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBinIdResponse>;
    /**
     * Return a json bin
     */
    getBinId(req: operations.GetBinIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBinIdResponse>;
    /**
     * Partially update a json bin with JSON Merge Patch
     */
    patchBinId(req: operations.PatchBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBinIdResponse>;
    /**
     * Create a json bin
     */
    postBin(config?: AxiosRequestConfig): Promise<operations.PostBinResponse>;
    /**
     * Update a json bin
     */
    putBinId(req: operations.PutBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PutBinIdResponse>;
}
