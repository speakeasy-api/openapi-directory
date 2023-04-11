import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bundle_downloads
 */
export declare class BundleDownloads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Bundle Downloads
     *
     * @remarks
     * List Bundle Downloads
     */
    getBundleDownloads(req: operations.GetBundleDownloadsRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleDownloadsResponse>;
}
