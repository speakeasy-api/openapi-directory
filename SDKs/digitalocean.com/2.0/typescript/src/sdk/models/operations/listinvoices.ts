import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// ListInvoices200ApplicationJsonInvoices
/** 
 * The invoice preview.
**/
export class ListInvoices200ApplicationJsonInvoices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_period" })
  invoicePeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class ListInvoices200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListInvoices200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListInvoices200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListInvoices200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListInvoices200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListInvoices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoice_preview" })
  invoicePreview?: shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: ListInvoices200ApplicationJsonInvoices })
  invoices?: ListInvoices200ApplicationJsonInvoices[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListInvoices200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListInvoices200ApplicationJsonMeta;
}


export class ListInvoices401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listInvoices200ApplicationJSONObject?: ListInvoices200ApplicationJson;

  @SpeakeasyMetadata()
  listInvoices401ApplicationJSONObject?: ListInvoices401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
