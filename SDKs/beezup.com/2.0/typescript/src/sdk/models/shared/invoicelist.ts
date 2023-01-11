import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { InvoiceListLinks } from "./invoicelistlinks";



export class InvoiceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: Invoice })
  invoices: Invoice[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: InvoiceListLinks;
}
