import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).
 */
export declare class TimePeriods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a time period
     *
     * @remarks
     * Returns the full record for a single time period.
     */
    getTimePeriod(req: operations.GetTimePeriodRequest, config?: AxiosRequestConfig): Promise<operations.GetTimePeriodResponse>;
    /**
     * Get time periods
     *
     * @remarks
     * Returns compact time period records.
     */
    getTimePeriods(req: operations.GetTimePeriodsRequest, config?: AxiosRequestConfig): Promise<operations.GetTimePeriodsResponse>;
}
