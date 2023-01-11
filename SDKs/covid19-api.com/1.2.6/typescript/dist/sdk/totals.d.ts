import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Totals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDailyReportTotals - getDailyReportTotals
     *
     * Get daily report data for whole world.
    **/
    getDailyReportTotals(req: operations.GetDailyReportTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyReportTotalsResponse>;
    /**
     * getLatestTotals - getLatestTotals
     *
     * Get latest data for whole world.
    **/
    getLatestTotals(req: operations.GetLatestTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestTotalsResponse>;
}
