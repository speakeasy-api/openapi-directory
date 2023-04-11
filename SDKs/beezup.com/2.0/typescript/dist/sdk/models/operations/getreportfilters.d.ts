import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportFiltersRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetReportFiltersResponse extends SpeakeasyBase {
    /**
     * Store or resource not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Report filter list
     */
    reportFilterList?: shared.ReportFilterList;
}
