import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer, LinkedCustomerInput } from "./linkedcustomer";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedSupplier, LinkedSupplierInput } from "./linkedsupplier";
/**
 * Type of entity this payment should be attributed to.
 */
export declare enum PaymentAllocationsAllocationTypeEnum {
    Invoice = "invoice",
    Order = "order",
    Expense = "expense",
    CreditMemo = "credit_memo",
    OverPayment = "over_payment",
    PrePayment = "pre_payment"
}
export declare class PaymentAllocationsInput extends SpeakeasyBase {
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
    type?: PaymentAllocationsAllocationTypeEnum;
}
/**
 * Status of payment
 */
export declare enum PaymentPaymentStatusEnum {
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}
/**
 * Type of payment
 */
export declare enum PaymentPaymentTypeEnum {
    AccountsReceivable = "accounts_receivable",
    AccountsPayable = "accounts_payable",
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit",
    AccountsReceivableOverpayment = "accounts_receivable_overpayment",
    AccountsPayableOverpayment = "accounts_payable_overpayment",
    AccountsReceivablePrepayment = "accounts_receivable_prepayment",
    AccountsPayablePrepayment = "accounts_payable_prepayment"
}
export declare class PaymentInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    /**
     * Unique identifier for the account to allocate payment to.
     */
    accountsReceivableAccountId?: string;
    /**
     * Type of accounts receivable account.
     */
    accountsReceivableAccountType?: string;
    allocations?: PaymentAllocationsInput[];
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
     * Payment id to be displayed.
     */
    displayId?: string;
    /**
     * Optional note to be associated with the payment.
     */
    note?: string;
    /**
     * Payment method
     */
    paymentMethod?: string;
    /**
     * Optional reference message returned by payment method on processing
     */
    paymentMethodReference?: string;
    /**
     * Payment has been reconciled
     */
    reconciled?: boolean;
    /**
     * Optional payment reference message ie: Debit remittance detail.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Status of payment
     */
    status?: PaymentPaymentStatusEnum;
    /**
     * The supplier this entity is linked to.
     */
    supplier?: LinkedSupplierInput;
    /**
     * Amount of payment
     */
    totalAmount: number;
    /**
     * Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD
     */
    transactionDate: Date;
    /**
     * Type of payment
     */
    type?: PaymentPaymentTypeEnum;
}
export declare class PaymentAllocations extends SpeakeasyBase {
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
    type?: PaymentAllocationsAllocationTypeEnum;
}
export declare class Payment extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    /**
     * Unique identifier for the account to allocate payment to.
     */
    accountsReceivableAccountId?: string;
    /**
     * Type of accounts receivable account.
     */
    accountsReceivableAccountType?: string;
    allocations?: PaymentAllocations[];
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
     * Payment id to be displayed.
     */
    displayId?: string;
    /**
     * The third-party API ID of original entity
     */
    downstreamId?: string;
    /**
     * Unique identifier representing the entity
     */
    id: string;
    /**
     * Optional note to be associated with the payment.
     */
    note?: string;
    /**
     * Payment method
     */
    paymentMethod?: string;
    /**
     * Optional reference message returned by payment method on processing
     */
    paymentMethodReference?: string;
    /**
     * Payment has been reconciled
     */
    reconciled?: boolean;
    /**
     * Optional payment reference message ie: Debit remittance detail.
     */
    reference?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Status of payment
     */
    status?: PaymentPaymentStatusEnum;
    /**
     * The supplier this entity is linked to.
     */
    supplier?: LinkedSupplier;
    /**
     * Amount of payment
     */
    totalAmount: number;
    /**
     * Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD
     */
    transactionDate: Date;
    /**
     * Type of payment
     */
    type?: PaymentPaymentTypeEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
