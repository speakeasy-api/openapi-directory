import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This call downloads the report as specified by the <b>report_id</b> path parameter.  <br><br>Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask" title="createReportTask API docs">createReportTask</a> to schedule and generate a Promoted Listings report. All date values are returned in UTC format (<code>yyyy-MM-ddThh:mm:ss.sssZ</code>).<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>
     */
    getReport(req: operations.GetReportRequest, security: operations.GetReportSecurity, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
}
