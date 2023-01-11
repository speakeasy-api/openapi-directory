import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreReportByProductPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreReportByProductRequest extends SpeakeasyBase {
    pathParams: GetStoreReportByProductPathParams;
    request: shared.ReportByProductRequest;
}
export declare class GetStoreReportByProductResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportByProductResponse?: shared.ReportByProductResponse;
}
