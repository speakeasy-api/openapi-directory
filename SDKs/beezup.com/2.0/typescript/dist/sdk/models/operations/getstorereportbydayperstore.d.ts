import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreReportByDayPerStoreRequest extends SpeakeasyBase {
    request: shared.ReportByDayRequest;
}
export declare class GetStoreReportByDayPerStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportByDayPerStoreResponse?: Record<string, shared.ReportByDayResponse>;
}
