import { SpeakeasyBase } from "../../../internal/utils";
import { BillLineItem, BillLineItemInput } from "./billlineitem";
import { CurrencyEnum } from "./currencyenum";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedSupplier, LinkedSupplierInput } from "./linkedsupplier";
/**
 * Invoice status
 */
export declare enum BillStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}
export declare class BillInput extends SpeakeasyBase {
    /**
     * Balance of bill due.
     */
    balance?: number;
    /**
     * Date bill was issued - YYYY-MM-DD.
     */
    billDate?: Date;
    billNumber?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Currency Exchange Rate at the time entity was recorded/generated.
     */
    currencyRate?: number;
    /**
     * Amount of deposit made to this bill.
     */
    deposit?: number;
    /**
     * The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.
     */
    dueDate?: Date;
    ledgerAccount?: LinkedLedgerAccountInput;
    lineItems?: BillLineItemInput[];
    notes?: string;
    /**
     * The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.
     */
    paidDate?: Date;
    /**
     * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
     */
    poNumber?: string;
    /**
     * Optional bill reference.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Invoice status
     */
    status?: BillStatusEnum;
    /**
     * Sub-total amount, normally before tax.
     */
    subTotal?: number;
    /**
     * The supplier this entity is linked to.
     */
    supplier?: LinkedSupplierInput;
    /**
     * Applicable tax id/code override if tax is not supplied on a line item basis.
     */
    taxCode?: string;
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    /**
     * Terms of payment.
     */
    terms?: string;
    /**
     * Total amount of bill, including tax.
     */
    total?: number;
    /**
     * Total tax amount applied to this bill.
     */
    totalTax?: number;
}
export declare class Bill extends SpeakeasyBase {
    /**
     * Balance of bill due.
     */
    balance?: number;
    /**
     * Date bill was issued - YYYY-MM-DD.
     */
    billDate?: Date;
    billNumber?: string;
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
     * Amount of deposit made to this bill.
     */
    deposit?: number;
    /**
     * The third-party API ID of original entity
     */
    downstreamId?: string;
    /**
     * The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.
     */
    dueDate?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    ledgerAccount?: LinkedLedgerAccount;
    lineItems?: BillLineItem[];
    notes?: string;
    /**
     * The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.
     */
    paidDate?: Date;
    /**
     * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
     */
    poNumber?: string;
    /**
     * Optional bill reference.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Invoice status
     */
    status?: BillStatusEnum;
    /**
     * Sub-total amount, normally before tax.
     */
    subTotal?: number;
    /**
     * The supplier this entity is linked to.
     */
    supplier?: LinkedSupplier;
    /**
     * Applicable tax id/code override if tax is not supplied on a line item basis.
     */
    taxCode?: string;
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    /**
     * Terms of payment.
     */
    terms?: string;
    /**
     * Total amount of bill, including tax.
     */
    total?: number;
    /**
     * Total tax amount applied to this bill.
     */
    totalTax?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
