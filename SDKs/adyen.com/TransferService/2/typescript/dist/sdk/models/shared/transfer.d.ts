import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Bank } from "./bank";
import { Counterparty } from "./counterparty";
/**
 * The direction of the transfer.
 *
 * @remarks
 *
 * Possible values: **incoming**, **outgoing**.
 */
export declare enum TransferDirectionEnum {
    Incoming = "incoming",
    Outgoing = "outgoing"
}
/**
 * Additional information about the status of the transfer.
 */
export declare enum TransferReasonEnum {
    AmountLimitExceded = "amountLimitExceded",
    Approved = "approved",
    CounterpartyAccountBlocked = "counterpartyAccountBlocked",
    CounterpartyAccountClosed = "counterpartyAccountClosed",
    CounterpartyAccountNotFound = "counterpartyAccountNotFound",
    CounterpartyAddressRequired = "counterpartyAddressRequired",
    CounterpartyBankTimedOut = "counterpartyBankTimedOut",
    CounterpartyBankUnavailable = "counterpartyBankUnavailable",
    Error = "error",
    NotEnoughBalance = "notEnoughBalance",
    RefusedByCounterpartyBank = "refusedByCounterpartyBank",
    RouteNotFound = "routeNotFound",
    Unknown = "unknown"
}
/**
 * The result of the transfer.
 *
 * @remarks
 *
 *  For example, **authorised**, **refused**, or **error**.
 */
export declare enum TransferStatusEnum {
    AtmWithdrawal = "atmWithdrawal",
    AtmWithdrawalReversalPending = "atmWithdrawalReversalPending",
    AtmWithdrawalReversed = "atmWithdrawalReversed",
    AuthAdjustmentAuthorised = "authAdjustmentAuthorised",
    AuthAdjustmentError = "authAdjustmentError",
    AuthAdjustmentRefused = "authAdjustmentRefused",
    Authorised = "authorised",
    BankTransfer = "bankTransfer",
    BankTransferPending = "bankTransferPending",
    Booked = "booked",
    BookingPending = "bookingPending",
    Cancelled = "cancelled",
    CapturePending = "capturePending",
    CaptureReversalPending = "captureReversalPending",
    CaptureReversed = "captureReversed",
    Captured = "captured",
    Chargeback = "chargeback",
    ChargebackPending = "chargebackPending",
    ChargebackReversalPending = "chargebackReversalPending",
    ChargebackReversed = "chargebackReversed",
    Credited = "credited",
    DepositCorrection = "depositCorrection",
    DepositCorrectionPending = "depositCorrectionPending",
    Dispute = "dispute",
    DisputeClosed = "disputeClosed",
    DisputeExpired = "disputeExpired",
    DisputeNeedsReview = "disputeNeedsReview",
    Error = "error",
    Expired = "expired",
    Failed = "failed",
    Fee = "fee",
    FeePending = "feePending",
    InternalTransfer = "internalTransfer",
    InternalTransferPending = "internalTransferPending",
    InvoiceDeduction = "invoiceDeduction",
    InvoiceDeductionPending = "invoiceDeductionPending",
    ManualCorrectionPending = "manualCorrectionPending",
    ManuallyCorrected = "manuallyCorrected",
    MatchedStatement = "matchedStatement",
    MatchedStatementPending = "matchedStatementPending",
    MerchantPayin = "merchantPayin",
    MerchantPayinPending = "merchantPayinPending",
    MerchantPayinReversed = "merchantPayinReversed",
    MerchantPayinReversedPending = "merchantPayinReversedPending",
    MiscCost = "miscCost",
    MiscCostPending = "miscCostPending",
    PaymentCost = "paymentCost",
    PaymentCostPending = "paymentCostPending",
    Received = "received",
    RefundPending = "refundPending",
    RefundReversalPending = "refundReversalPending",
    RefundReversed = "refundReversed",
    Refunded = "refunded",
    Refused = "refused",
    ReserveAdjustment = "reserveAdjustment",
    ReserveAdjustmentPending = "reserveAdjustmentPending",
    Returned = "returned",
    SecondChargeback = "secondChargeback",
    SecondChargebackPending = "secondChargebackPending",
    Undefined = "undefined"
}
/**
 * OK - the request has succeeded.
 */
export declare class Transfer extends SpeakeasyBase {
    amount: Amount;
    /**
     * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    bank?: Bank;
    counterparty: Counterparty;
    /**
     * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
     */
    description?: string;
    /**
     * The direction of the transfer.
     *
     * @remarks
     *
     * Possible values: **incoming**, **outgoing**.
     */
    direction?: TransferDirectionEnum;
    /**
     * The ID of the resource.
     */
    id?: string;
    /**
     * The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
     */
    paymentInstrumentId?: string;
    /**
     * Additional information about the status of the transfer.
     */
    reason?: TransferReasonEnum;
    /**
     * Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.
     */
    reference?: string;
    /**
     *  A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.
     *
     * @remarks
     *
     *  Supported characters: **a-z**, **A-Z**, **0-9**. Maximum length: 80 characters.
     */
    referenceForBeneficiary?: string;
    /**
     * The result of the transfer.
     *
     * @remarks
     *
     *  For example, **authorised**, **refused**, or **error**.
     */
    status: TransferStatusEnum;
}
