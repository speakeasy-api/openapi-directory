import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetInvoicesLink } from "./linksgetinvoiceslink";



export class InvoiceListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetInvoicesLink;
}
