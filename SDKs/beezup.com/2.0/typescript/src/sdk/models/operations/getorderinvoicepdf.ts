import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderInvoicePdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest;
}


export class GetOrderInvoicePdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrderInvoicePdf200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}
