import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum {
    AchFailure = "ACHFailure",
    Adjustment = "Adjustment",
    AttemptFailed = "AttemptFailed",
    Chargeback = "Chargeback",
    Credit = "Credit",
    CreditExpiration = "CreditExpiration",
    Invoice = "Invoice",
    Payment = "Payment",
    Refund = "Refund",
    Reversal = "Reversal"
}


export class ListBillingHistory200ApplicationJsonBillingHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_id" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum;
}


export class ListBillingHistory200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListBillingHistory200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListBillingHistory200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListBillingHistory200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListBillingHistory200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListBillingHistory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_history", elemType: ListBillingHistory200ApplicationJsonBillingHistory })
  billingHistory: ListBillingHistory200ApplicationJsonBillingHistory[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListBillingHistory200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListBillingHistory200ApplicationJsonMeta;
}


export class ListBillingHistory401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListBillingHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBillingHistory200ApplicationJSONObject?: ListBillingHistory200ApplicationJson;

  @SpeakeasyMetadata()
  listBillingHistory401ApplicationJSONObject?: ListBillingHistory401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
