import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewOrderInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceHtmlContent" })
  invoiceHtmlContent: string;
}
