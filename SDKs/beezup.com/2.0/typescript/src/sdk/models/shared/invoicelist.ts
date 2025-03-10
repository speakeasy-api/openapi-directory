/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { InvoiceListLinks } from "./invoicelistlinks";
import { Expose, Type } from "class-transformer";

/**
 * Get all invoices of a customer
 */
export class InvoiceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Invoice })
  @Expose({ name: "invoices" })
  @Type(() => Invoice)
  invoices: Invoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  @Type(() => InvoiceListLinks)
  links: InvoiceListLinks;
}
