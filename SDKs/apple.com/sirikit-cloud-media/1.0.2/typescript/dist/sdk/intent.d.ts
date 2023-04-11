import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Intent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addMedia
     */
    addMediaIntentHandling(req: operations.AddMediaIntentHandlingRequest, config?: AxiosRequestConfig): Promise<operations.AddMediaIntentHandlingResponse>;
    /**
     * playMedia
     */
    playMediaIntentHandling(req: operations.PlayMediaIntentHandlingRequest, config?: AxiosRequestConfig): Promise<operations.PlayMediaIntentHandlingResponse>;
    /**
     * updateMediaAffinity
     */
    updateMediaAffinityIntentHandling(req: operations.UpdateMediaAffinityIntentHandlingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMediaAffinityIntentHandlingResponse>;
}
