import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Counterparty } from "./counterparty";
/**
 * The category of the transaction indicating the type of activity.
 *
 * @remarks
 *
 *  Possible values:
 *
 * * **platformPayment**: The transaction is a payment or payment modification made with an Adyen merchant account.
 *
 * * **internal**: The transaction resulted from an internal adjustment such as a deposit correction or invoice deduction.
 *
 * * **bank**: The transaction is a bank-related activity, such as sending a payout or receiving funds.
 *
 * * **issuedCard**: The transaction is a card-related activity, such as using an Adyen-issued card to pay online.
 *
 *
 */
export declare enum TransactionCategoryEnum {
    Bank = "bank",
    Grants = "grants",
    Internal = "internal",
    IssuedCard = "issuedCard",
    PlatformPayment = "platformPayment"
}
/**
 * The status of the transaction.
 *
 * @remarks
 *
 *  Possible values:
 *
 * * **pending**: The transaction is still pending.
 *
 * * **booked**: The transaction has been booked to the balance account.
 *
 *
 */
export declare enum TransactionStatusEnum {
    Booked = "booked",
    Pending = "pending"
}
/**
 * The type of the transaction.
 *
 * @remarks
 *
 *  Possible values: **payment**, **capture**, **captureReversal**, **refund** **refundReversal**, **chargeback**, **chargebackReversal**, **secondChargeback**, **atmWithdrawal**, **atmWithdrawalReversal**, **internalTransfer**, **manualCorrection**, **invoiceDeduction**, **depositCorrection**, **bankTransfer**, **miscCost**, **paymentCost**, **fee**
 */
export declare enum TransactionTypeEnum {
    AtmWithdrawal = "atmWithdrawal",
    AtmWithdrawalReversal = "atmWithdrawalReversal",
    BalanceAdjustment = "balanceAdjustment",
    BalanceRollover = "balanceRollover",
    BankTransfer = "bankTransfer",
    Capture = "capture",
    CaptureReversal = "captureReversal",
    Chargeback = "chargeback",
    ChargebackReversal = "chargebackReversal",
    DepositCorrection = "depositCorrection",
    Fee = "fee",
    Grant = "grant",
    Installment = "installment",
    InstallmentReversal = "installmentReversal",
    InternalTransfer = "internalTransfer",
    InvoiceDeduction = "invoiceDeduction",
    Leftover = "leftover",
    ManualCorrection = "manualCorrection",
    MiscCost = "miscCost",
    Payment = "payment",
    PaymentCost = "paymentCost",
    Refund = "refund",
    RefundReversal = "refundReversal",
    Repayment = "repayment",
    ReserveAdjustment = "reserveAdjustment",
    SecondChargeback = "secondChargeback"
}
/**
 * OK - the request has succeeded.
 */
export declare class Transaction extends SpeakeasyBase {
    /**
     * Unique identifier of the account holder.
     */
    accountHolderId: string;
    amount: Amount;
    /**
     * Unique identifier of the balance account.
     */
    balanceAccountId: string;
    /**
     * Unique identifier of the balance platform.
     */
    balancePlatform: string;
    /**
     * The date the transaction was booked to the balance account.
     */
    bookingDate: Date;
    /**
     * The category of the transaction indicating the type of activity.
     *
     * @remarks
     *
     *  Possible values:
     *
     * * **platformPayment**: The transaction is a payment or payment modification made with an Adyen merchant account.
     *
     * * **internal**: The transaction resulted from an internal adjustment such as a deposit correction or invoice deduction.
     *
     * * **bank**: The transaction is a bank-related activity, such as sending a payout or receiving funds.
     *
     * * **issuedCard**: The transaction is a card-related activity, such as using an Adyen-issued card to pay online.
     *
     *
     */
    category?: TransactionCategoryEnum;
    counterparty: Counterparty;
    /**
     * The date the transaction was created.
     */
    createdAt: Date;
    /**
     * The `description` from the `/transfers` request.
     */
    description?: string;
    /**
     * Unique identifier of the transaction.
     */
    id: string;
    instructedAmount?: Amount;
    /**
     * Unique identifier of the payment instrument that was used for the transaction.
     */
    paymentInstrumentId?: string;
    /**
     * The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.
     */
    reference: string;
    /**
     * The reference sent to or received from the counterparty.
     *
     * @remarks
     *
     * * For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.
     *
     *  * For incoming funds, this is the reference from the sender.
     */
    referenceForBeneficiary?: string;
    /**
     * The status of the transaction.
     *
     * @remarks
     *
     *  Possible values:
     *
     * * **pending**: The transaction is still pending.
     *
     * * **booked**: The transaction has been booked to the balance account.
     *
     *
     */
    status: TransactionStatusEnum;
    /**
     * Unique identifier of the related transfer.
     */
    transferId?: string;
    /**
     * The type of the transaction.
     *
     * @remarks
     *
     *  Possible values: **payment**, **capture**, **captureReversal**, **refund** **refundReversal**, **chargeback**, **chargebackReversal**, **secondChargeback**, **atmWithdrawal**, **atmWithdrawalReversal**, **internalTransfer**, **manualCorrection**, **invoiceDeduction**, **depositCorrection**, **bankTransfer**, **miscCost**, **paymentCost**, **fee**
     */
    type?: TransactionTypeEnum;
    /**
     * The date the transfer amount becomes available in the balance account.
     */
    valueDate: Date;
}
