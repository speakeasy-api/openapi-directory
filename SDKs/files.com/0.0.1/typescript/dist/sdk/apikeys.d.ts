import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about api_keys
 */
export declare class ApiKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Api Key
     *
     * @remarks
     * Delete Api Key
     */
    deleteApiKeysId(req: operations.DeleteApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeysIdResponse>;
    /**
     * List Api Keys
     *
     * @remarks
     * List Api Keys
     */
    getApiKeys(req: operations.GetApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeysResponse>;
    /**
     * Show Api Key
     *
     * @remarks
     * Show Api Key
     */
    getApiKeysId(req: operations.GetApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeysIdResponse>;
    /**
     * Update Api Key
     *
     * @remarks
     * Update Api Key
     */
    patchApiKeysId(req: operations.PatchApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchApiKeysIdResponse>;
    /**
     * Create Api Key
     *
     * @remarks
     * Create Api Key
     */
    postApiKeys(req: operations.PostApiKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostApiKeysResponse>;
}
