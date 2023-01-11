import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems
/** 
 * The invoice preview.
**/
export class Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_period" })
  invoicePeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
