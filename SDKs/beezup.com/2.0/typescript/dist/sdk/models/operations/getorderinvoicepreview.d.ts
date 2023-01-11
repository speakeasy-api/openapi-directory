import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderInvoicePreviewPathParams extends SpeakeasyBase {
    accountId: string;
    beezUPOrderUUID: string;
    marketplaceTechnicalCode: string;
}
export declare class GetOrderInvoicePreviewHeaders extends SpeakeasyBase {
    acceptEncoding: string;
}
export declare class GetOrderInvoicePreviewRequest extends SpeakeasyBase {
    pathParams: GetOrderInvoicePreviewPathParams;
    headers: GetOrderInvoicePreviewHeaders;
    request: shared.PreviewOrderInvoiceRequest;
}
export declare class GetOrderInvoicePreviewResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    previewOrderInvoiceResponse?: shared.PreviewOrderInvoiceResponse;
}
