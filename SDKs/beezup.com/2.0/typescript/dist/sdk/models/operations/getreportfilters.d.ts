import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportFiltersPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetReportFiltersRequest extends SpeakeasyBase {
    pathParams: GetReportFiltersPathParams;
}
export declare class GetReportFiltersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportFilterList?: shared.ReportFilterList;
}
