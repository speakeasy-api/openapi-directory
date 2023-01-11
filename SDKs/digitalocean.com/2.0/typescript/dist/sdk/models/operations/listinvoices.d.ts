import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
/**
 * The invoice preview.
**/
export declare class ListInvoices200ApplicationJsonInvoices extends SpeakeasyBase {
    amount?: string;
    invoicePeriod?: string;
    invoiceUuid?: string;
    updatedAt?: string;
}
export declare class ListInvoices200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListInvoices200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListInvoices200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListInvoices200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListInvoices200ApplicationJson extends SpeakeasyBase {
    invoicePreview?: shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems;
    invoices?: ListInvoices200ApplicationJsonInvoices[];
    links?: ListInvoices200ApplicationJsonLinks;
    meta: ListInvoices200ApplicationJsonMeta;
}
export declare class ListInvoices401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listInvoices200ApplicationJSONObject?: ListInvoices200ApplicationJson;
    listInvoices401ApplicationJSONObject?: ListInvoices401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
