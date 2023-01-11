import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderInvoicePdfRequest extends SpeakeasyBase {
    request: shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest;
}
export declare class GetOrderInvoicePdfResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    getOrderInvoicePdf200ApplicationPdfBinaryString?: Uint8Array;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
