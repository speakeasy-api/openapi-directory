import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AffiliateSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getV3AffiliatesSearchImages(req: operations.GetV3AffiliatesSearchImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetV3AffiliatesSearchImagesResponse>;
    getV3AffiliatesSearchVideos(req: operations.GetV3AffiliatesSearchVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetV3AffiliatesSearchVideosResponse>;
}
