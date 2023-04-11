import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { InvoiceLineItem, InvoiceLineItemInput } from "./invoicelineitem";
import { LinkedCustomer, LinkedCustomerInput } from "./linkedcustomer";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
/**
 * Type of entity this payment should be attributed to.
 */
export declare enum CreditNoteAllocationsAllocationTypeEnum {
    Invoice = "invoice",
    Order = "order",
    Expense = "expense",
    CreditMemo = "credit_memo",
    OverPayment = "over_payment",
    PrePayment = "pre_payment"
}
export declare class CreditNoteAllocationsInput extends SpeakeasyBase {
    /**
     * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
     */
    amount?: number;
    /**
     * Unique identifier of entity this payment should be attributed to.
     */
    id?: string;
    /**
     * Type of entity this payment should be attributed to.
     */
    type?: CreditNoteAllocationsAllocationTypeEnum;
}
/**
 * Status of credit notes
 */
export declare enum CreditNoteCreditNoteStatusEnum {
    Draft = "draft",
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}
/**
 * Type of payment
 */
export declare enum CreditNoteCreditNoteTypeEnum {
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit"
}
export declare class CreditNoteInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    allocations?: CreditNoteAllocationsInput[];
    /**
     * The balance reflecting any payments made against the transaction.
     */
    balance?: number;
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
     * Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD
     */
    dateIssued?: Date;
    /**
     * Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD
     */
    datePaid?: Date;
    lineItems?: InvoiceLineItemInput[];
    /**
     * Optional note to be associated with the credit note.
     */
    note?: string;
    /**
     * Credit note number.
     */
    number?: string;
    /**
     * Optional reference message ie: Debit remittance detail.
     */
    reference?: string;
    /**
     * Indicates the total credit amount still available to apply towards the payment.
     */
    remainingCredit?: number;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Status of credit notes
     */
    status?: CreditNoteCreditNoteStatusEnum;
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
     * Optional terms to be associated with the credit note.
     */
    terms?: string;
    /**
     * Amount of transaction
     */
    totalAmount: number;
    /**
     * Total tax amount applied to this invoice.
     */
    totalTax?: number;
    /**
     * Type of payment
     */
    type?: CreditNoteCreditNoteTypeEnum;
}
export declare class CreditNoteAllocations extends SpeakeasyBase {
    /**
     * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
     */
    amount?: number;
    code?: string;
    /**
     * Unique identifier of entity this payment should be attributed to.
     */
    id?: string;
    /**
     * Type of entity this payment should be attributed to.
     */
    type?: CreditNoteAllocationsAllocationTypeEnum;
}
export declare class CreditNote extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    allocations?: CreditNoteAllocations[];
    /**
     * The balance reflecting any payments made against the transaction.
     */
    balance?: number;
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
     * Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD
     */
    dateIssued?: Date;
    /**
     * Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD
     */
    datePaid?: Date;
    /**
     * Unique identifier representing the entity
     */
    id: string;
    lineItems?: InvoiceLineItem[];
    /**
     * Optional note to be associated with the credit note.
     */
    note?: string;
    /**
     * Credit note number.
     */
    number?: string;
    /**
     * Optional reference message ie: Debit remittance detail.
     */
    reference?: string;
    /**
     * Indicates the total credit amount still available to apply towards the payment.
     */
    remainingCredit?: number;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Status of credit notes
     */
    status?: CreditNoteCreditNoteStatusEnum;
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
     * Optional terms to be associated with the credit note.
     */
    terms?: string;
    /**
     * Amount of transaction
     */
    totalAmount: number;
    /**
     * Total tax amount applied to this invoice.
     */
    totalTax?: number;
    /**
     * Type of payment
     */
    type?: CreditNoteCreditNoteTypeEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
