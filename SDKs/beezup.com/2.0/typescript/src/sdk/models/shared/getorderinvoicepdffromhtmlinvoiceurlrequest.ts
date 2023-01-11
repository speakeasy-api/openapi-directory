import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrderInvoicePdfFromHtmlInvoiceUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderInvoiceUri" })
  orderInvoiceUri: string;
}
