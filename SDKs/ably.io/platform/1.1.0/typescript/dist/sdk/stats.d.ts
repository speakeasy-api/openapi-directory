import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve usage statistics for an application
     *
     * @remarks
     * The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
     */
    getStats(req: operations.GetStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsResponse>;
    /**
     * Get the service time
     *
     * @remarks
     * This returns the service time in milliseconds since the epoch.
     */
    getTime(req: operations.GetTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetTimeResponse>;
}
