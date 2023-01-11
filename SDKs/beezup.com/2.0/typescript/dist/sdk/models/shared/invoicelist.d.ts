import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { InvoiceListLinks } from "./invoicelistlinks";
export declare class InvoiceList extends SpeakeasyBase {
    invoices: Invoice[];
    links: InvoiceListLinks;
}
