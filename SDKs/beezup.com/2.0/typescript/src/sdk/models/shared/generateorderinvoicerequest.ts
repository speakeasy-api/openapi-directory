import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateOrderInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceSequenceNumber" })
  invoiceSequenceNumber?: number;
}
