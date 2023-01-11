import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreReportByChannelPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreReportByChannelRequest extends SpeakeasyBase {
    pathParams: GetStoreReportByChannelPathParams;
    request: shared.ReportByChannelRequest;
}
export declare class GetStoreReportByChannelResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportByChannelResponse?: shared.ReportByChannelResponse;
}
