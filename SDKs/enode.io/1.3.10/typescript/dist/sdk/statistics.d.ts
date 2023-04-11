import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get User Charging Statistics
     *
     * @remarks
     * Returns a normalized timeseries of statistics about power consumption and price for the User.
     */
    getStatisticsCharging(req: operations.GetStatisticsChargingRequest, security: operations.GetStatisticsChargingSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatisticsChargingResponse>;
}
