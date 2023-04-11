import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReportTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteReportTaskRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.
     */
    reportTaskId: string;
}
export declare class DeleteReportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
