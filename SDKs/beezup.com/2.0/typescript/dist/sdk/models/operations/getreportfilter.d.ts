import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportFilterRequest extends SpeakeasyBase {
    /**
     * Your report filter identifier
     */
    reportFilterId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetReportFilterResponse extends SpeakeasyBase {
    /**
     * Report filter not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Report filter
     */
    reportFilter?: shared.ReportFilter;
}
