import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { InvoiceListLinks } from "./invoicelistlinks";
/**
 * Get all invoices of a customer
 */
export declare class InvoiceList extends SpeakeasyBase {
    invoices: Invoice[];
    links: InvoiceListLinks;
}
