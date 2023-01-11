import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AnalyticsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsIndex - Get the Analytics API operation index
    **/
    analyticsIndex(config?: AxiosRequestConfig): Promise<operations.AnalyticsIndexResponse>;
    /**
     * analyticsStoreIndex - Get the Analytics API operation index for one store
    **/
    analyticsStoreIndex(req: operations.AnalyticsStoreIndexRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsStoreIndexResponse>;
}
