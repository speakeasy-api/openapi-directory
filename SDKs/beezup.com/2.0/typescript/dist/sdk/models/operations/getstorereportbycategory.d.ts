import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreReportByCategoryPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreReportByCategoryRequest extends SpeakeasyBase {
    pathParams: GetStoreReportByCategoryPathParams;
    request: shared.ReportByCategoryRequest;
}
export declare class GetStoreReportByCategoryResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    reportByCategoryResponse?: shared.ReportByCategoryResponse;
}
