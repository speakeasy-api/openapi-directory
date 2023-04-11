import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bundles
 */
export declare class Bundles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Bundle
     *
     * @remarks
     * Delete Bundle
     */
    deleteBundlesId(req: operations.DeleteBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBundlesIdResponse>;
    /**
     * List Bundles
     *
     * @remarks
     * List Bundles
     */
    getBundles(req: operations.GetBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetBundlesResponse>;
    /**
     * Show Bundle
     *
     * @remarks
     * Show Bundle
     */
    getBundlesId(req: operations.GetBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBundlesIdResponse>;
    /**
     * Update Bundle
     *
     * @remarks
     * Update Bundle
     */
    patchBundlesId(req: operations.PatchBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBundlesIdResponse>;
    /**
     * Create Bundle
     *
     * @remarks
     * Create Bundle
     */
    postBundles(req: operations.PostBundlesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostBundlesResponse>;
    /**
     * Send email(s) with a link to bundle
     *
     * @remarks
     * Send email(s) with a link to bundle
     */
    postBundlesIdShare(req: operations.PostBundlesIdShareRequest, config?: AxiosRequestConfig): Promise<operations.PostBundlesIdShareResponse>;
}
