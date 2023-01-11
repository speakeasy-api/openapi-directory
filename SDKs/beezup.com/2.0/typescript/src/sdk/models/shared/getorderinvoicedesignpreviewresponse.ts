import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrderInvoiceDesignPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceHtmlContent" })
  invoiceHtmlContent: string;
}
