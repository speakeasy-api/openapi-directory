import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOrderInvoiceGeneralSettingsResponse
/** 
 * Order Invoice General Settings
**/
export class GetOrderInvoiceGeneralSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cultureName" })
  cultureName: string;

  @SpeakeasyMetadata({ data: "json, name=invoicePrefix" })
  invoicePrefix: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceStartingSequenceNumber" })
  invoiceStartingSequenceNumber: number;

  @SpeakeasyMetadata({ data: "json, name=lastInvoiceSequenceNumber" })
  lastInvoiceSequenceNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=productVATPercent" })
  productVATPercent: number;

  @SpeakeasyMetadata({ data: "json, name=shippingVATPercent" })
  shippingVATPercent: number;
}
