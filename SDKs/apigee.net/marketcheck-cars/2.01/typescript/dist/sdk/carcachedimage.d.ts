import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CarCachedImage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCachedImage - Fetch cached image
     *
     * Fetch the cached car image
    **/
    getCachedImage(req: operations.GetCachedImageRequest, config?: AxiosRequestConfig): Promise<operations.GetCachedImageResponse>;
}
