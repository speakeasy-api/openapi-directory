import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Analytics Restv 2 Controller
 */
export declare class Analytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the results of executed query defined by the parameters passed in
     */
    getAnalyticsDataUsingGET(req: operations.GETAnalyticsDataUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnalyticsDataUsingGETResponse>;
    /**
     * Returns the count of executed query
     */
    getDataCountUsingGET(req: operations.GETDataCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETDataCountUsingGETResponse>;
    /**
     * Returns the percentage of user retention over the last 30 days
     */
    getRetentionUsingGET(req: operations.GETRetentionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETRetentionUsingGETResponse>;
}
