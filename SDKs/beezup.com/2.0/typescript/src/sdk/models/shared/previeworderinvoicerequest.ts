import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewOrderInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceSequenceNumber" })
  invoiceSequenceNumber?: number;
}
