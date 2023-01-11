import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReport - This call downloads the report as specified by the report_id path parameter. Call createReportTask to schedule and generate a Promoted Listings report. All date values are returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ).
    **/
    getReport(req: operations.GetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
}
