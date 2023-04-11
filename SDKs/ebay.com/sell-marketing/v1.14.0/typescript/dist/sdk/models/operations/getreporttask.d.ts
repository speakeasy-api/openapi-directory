import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetReportTaskRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.
     */
    reportTaskId: string;
}
export declare class GetReportTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportTask?: shared.ReportTask;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
