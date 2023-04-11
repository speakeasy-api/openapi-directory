import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about public_keys
 */
export declare class PublicKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Public Key
     *
     * @remarks
     * Delete Public Key
     */
    deletePublicKeysId(req: operations.DeletePublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePublicKeysIdResponse>;
    /**
     * List Public Keys
     *
     * @remarks
     * List Public Keys
     */
    getPublicKeys(req: operations.GetPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicKeysResponse>;
    /**
     * Show Public Key
     *
     * @remarks
     * Show Public Key
     */
    getPublicKeysId(req: operations.GetPublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicKeysIdResponse>;
    /**
     * Update Public Key
     *
     * @remarks
     * Update Public Key
     */
    patchPublicKeysId(req: operations.PatchPublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchPublicKeysIdResponse>;
    /**
     * Create Public Key
     *
     * @remarks
     * Create Public Key
     */
    postPublicKeys(req: operations.PostPublicKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPublicKeysResponse>;
}
