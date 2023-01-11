import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum {
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
export declare class ListBillingHistory200ApplicationJsonBillingHistory extends SpeakeasyBase {
    amount?: string;
    date?: Date;
    description?: string;
    invoiceId?: string;
    invoiceUuid?: string;
    type?: ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum;
}
export declare class ListBillingHistory200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListBillingHistory200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListBillingHistory200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListBillingHistory200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListBillingHistory200ApplicationJson extends SpeakeasyBase {
    billingHistory: ListBillingHistory200ApplicationJsonBillingHistory[];
    links?: ListBillingHistory200ApplicationJsonLinks;
    meta: ListBillingHistory200ApplicationJsonMeta;
}
export declare class ListBillingHistory401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListBillingHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listBillingHistory200ApplicationJSONObject?: ListBillingHistory200ApplicationJson;
    listBillingHistory401ApplicationJSONObject?: ListBillingHistory401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
