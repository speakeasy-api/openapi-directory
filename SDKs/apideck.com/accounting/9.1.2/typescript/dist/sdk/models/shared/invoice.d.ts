import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { InvoiceLineItem, InvoiceLineItemInput } from "./invoicelineitem";
import { LinkedCustomer, LinkedCustomerInput } from "./linkedcustomer";
/**
 * Invoice status
 */
export declare enum InvoiceStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}
/**
 * Invoice type
 */
export declare enum InvoiceInvoiceTypeEnum {
    Standard = "standard",
    Credit = "credit",
    Service = "service",
    Product = "product",
    Supplier = "supplier",
    Other = "other"
}
export declare class InvoiceInput extends SpeakeasyBase {
    /**
     * Balance of invoice due.
     */
    balance?: number;
    billingAddress?: Address;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Currency Exchange Rate at the time entity was recorded/generated.
     */
    currencyRate?: number;
    /**
     * The customer this entity is linked to.
     */
    customer?: LinkedCustomerInput;
    /**
     * Customer memo
     */
    customerMemo?: string;
    /**
     * Amount of deposit made to this invoice.
     */
    deposit?: number;
    /**
     * Discount amount applied to this invoice.
     */
    discountAmount?: number;
    /**
     * Discount percentage applied to this invoice.
     */
    discountPercentage?: number;
    /**
     * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.
     */
    dueDate?: Date;
    /**
     * Date invoice was issued - YYYY-MM-DD.
     */
    invoiceDate?: Date;
    /**
     * Invoice sent to contact/customer.
     */
    invoiceSent?: boolean;
    lineItems?: InvoiceLineItemInput[];
    /**
     * Invoice number.
     */
    number?: string;
    /**
     * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
     */
    poNumber?: string;
    /**
     * Optional invoice reference.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    shippingAddress?: Address;
    /**
     * URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.
     */
    sourceDocumentUrl?: string;
    /**
     * Invoice status
     */
    status?: InvoiceStatusEnum;
    /**
     * Sub-total amount, normally before tax.
     */
    subTotal?: number;
    /**
     * Applicable tax id/code override if tax is not supplied on a line item basis.
     */
    taxCode?: string;
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    /**
     * Optional invoice template
     */
    templateId?: string;
    /**
     * Terms of payment.
     */
    terms?: string;
    /**
     * Total amount of invoice, including tax.
     */
    total?: number;
    /**
     * Total tax amount applied to this invoice.
     */
    totalTax?: number;
    /**
     * Invoice type
     */
    type?: InvoiceInvoiceTypeEnum;
}
export declare class Invoice extends SpeakeasyBase {
    /**
     * Balance of invoice due.
     */
    balance?: number;
    billingAddress?: Address;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Currency Exchange Rate at the time entity was recorded/generated.
     */
    currencyRate?: number;
    /**
     * The customer this entity is linked to.
     */
    customer?: LinkedCustomer;
    /**
     * Customer memo
     */
    customerMemo?: string;
    /**
     * Amount of deposit made to this invoice.
     */
    deposit?: number;
    /**
     * Discount amount applied to this invoice.
     */
    discountAmount?: number;
    /**
     * Discount percentage applied to this invoice.
     */
    discountPercentage?: number;
    /**
     * The third-party API ID of original entity
     */
    downstreamId?: string;
    /**
     * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.
     */
    dueDate?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Date invoice was issued - YYYY-MM-DD.
     */
    invoiceDate?: Date;
    /**
     * Invoice sent to contact/customer.
     */
    invoiceSent?: boolean;
    lineItems?: InvoiceLineItem[];
    /**
     * Invoice number.
     */
    number?: string;
    /**
     * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
     */
    poNumber?: string;
    /**
     * Optional invoice reference.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    shippingAddress?: Address;
    /**
     * URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.
     */
    sourceDocumentUrl?: string;
    /**
     * Invoice status
     */
    status?: InvoiceStatusEnum;
    /**
     * Sub-total amount, normally before tax.
     */
    subTotal?: number;
    /**
     * Applicable tax id/code override if tax is not supplied on a line item basis.
     */
    taxCode?: string;
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    /**
     * Optional invoice template
     */
    templateId?: string;
    /**
     * Terms of payment.
     */
    terms?: string;
    /**
     * Total amount of invoice, including tax.
     */
    total?: number;
    /**
     * Total tax amount applied to this invoice.
     */
    totalTax?: number;
    /**
     * Invoice type
     */
    type?: InvoiceInvoiceTypeEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
