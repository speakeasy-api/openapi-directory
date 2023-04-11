import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AnalyticsReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the report filter
     */
    deleteReportFilter(req: operations.DeleteReportFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportFilterResponse>;
    /**
     * Get the report filter description
     */
    getReportFilter(req: operations.GetReportFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetReportFilterResponse>;
    /**
     * Get report filter list for the given store
     */
    getReportFilters(req: operations.GetReportFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetReportFiltersResponse>;
    /**
     * Save the report filter
     */
    saveReportFilter(req: operations.SaveReportFilterRequest, config?: AxiosRequestConfig): Promise<operations.SaveReportFilterResponse>;
}
