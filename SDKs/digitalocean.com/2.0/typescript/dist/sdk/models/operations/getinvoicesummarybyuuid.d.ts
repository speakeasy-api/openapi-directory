import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceSummaryByUuidPathParams extends SpeakeasyBase {
    invoiceUuid: string;
}
/**
 * A summary of the credits and adjustments contributing to the invoice.
**/
export declare class GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments extends SpeakeasyBase {
    amount?: string;
    name?: string;
}
/**
 * A summary of the overages contributing to the invoice.
**/
export declare class GetInvoiceSummaryByUuid200ApplicationJsonOverages extends SpeakeasyBase {
    amount?: string;
    name?: string;
}
export declare class GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems extends SpeakeasyBase {
    amount?: string;
    count?: string;
    name?: string;
}
/**
 * A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.
**/
export declare class GetInvoiceSummaryByUuid200ApplicationJsonProductCharges extends SpeakeasyBase {
    amount?: string;
    items?: GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems[];
    name?: string;
}
/**
 * A summary of the taxes contributing to the invoice.
**/
export declare class GetInvoiceSummaryByUuid200ApplicationJsonTaxes extends SpeakeasyBase {
    amount?: string;
    name?: string;
}
/**
 * The billing address of the customer being invoiced.
**/
export declare class GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    countryIso2Code?: string;
    createdAt?: string;
    postalCode?: string;
    region?: string;
    updatedAt?: string;
}
export declare class GetInvoiceSummaryByUuid200ApplicationJson extends SpeakeasyBase {
    amount?: string;
    billingPeriod?: string;
    creditsAndAdjustments?: GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments;
    invoiceUuid?: string;
    overages?: GetInvoiceSummaryByUuid200ApplicationJsonOverages;
    productCharges?: GetInvoiceSummaryByUuid200ApplicationJsonProductCharges;
    taxes?: GetInvoiceSummaryByUuid200ApplicationJsonTaxes;
    userBillingAddress?: GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress;
    userCompany?: string;
    userEmail?: string;
    userName?: string;
}
export declare class GetInvoiceSummaryByUuid401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetInvoiceSummaryByUuidRequest extends SpeakeasyBase {
    pathParams: GetInvoiceSummaryByUuidPathParams;
}
export declare class GetInvoiceSummaryByUuidResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getInvoiceSummaryByUuid200ApplicationJSONObject?: GetInvoiceSummaryByUuid200ApplicationJson;
    getInvoiceSummaryByUuid401ApplicationJSONObject?: GetInvoiceSummaryByUuid401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
