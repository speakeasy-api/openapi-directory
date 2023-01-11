import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreReportByDayPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreReportByDayRequest extends SpeakeasyBase {
    pathParams: GetStoreReportByDayPathParams;
    request: shared.ReportByDayRequest;
}
export declare class GetStoreReportByDayResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportByDayResponse?: shared.ReportByDayResponse;
}
