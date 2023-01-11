import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getStatisticsCharging - Get User Charging Statistics
     *
     * Returns a normalized timeseries of statistics about power consumption and price for the User.
    **/
    getStatisticsCharging(req: operations.GetStatisticsChargingRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsChargingResponse>;
}
