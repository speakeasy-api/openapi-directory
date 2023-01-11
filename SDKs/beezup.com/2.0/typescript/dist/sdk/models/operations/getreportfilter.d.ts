import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportFilterPathParams extends SpeakeasyBase {
    reportFilterId: string;
    storeId: string;
}
export declare class GetReportFilterRequest extends SpeakeasyBase {
    pathParams: GetReportFilterPathParams;
}
export declare class GetReportFilterResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportFilter?: shared.ReportFilter;
}
