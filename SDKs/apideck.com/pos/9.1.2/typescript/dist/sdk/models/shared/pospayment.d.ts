import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { PaymentCard, PaymentCardInput } from "./paymentcard";
import { PosBankAccount } from "./posbankaccount";
import { ServiceCharge, ServiceChargeInput } from "./servicecharge";
export declare class PosPaymentCardDetailsInput extends SpeakeasyBase {
    /**
     * A card's non-confidential details.
     */
    card?: PaymentCardInput;
}
/**
 * Cash details for this payment
 */
export declare class PosPaymentCashDetails extends SpeakeasyBase {
    /**
     * The amount of cash given by the customer.
     */
    amount?: any;
    /**
     * The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields.
     */
    chargeBackAmount?: any;
}
/**
 * The type of external payment the seller received. It can be one of the following:
 *
 * @remarks
 * - CHECK - Paid using a physical check.
 * - BANK_TRANSFER - Paid using external bank transfer.
 * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
 * - CRYPTO - Paid using a crypto currency.
 * - SQUARE_CASH - Paid using Square Cash App.
 * - SOCIAL - Paid using peer-to-peer payment applications.
 * - EXTERNAL - A third-party application gathered this payment outside of Square.
 * - EMONEY - Paid using an E-money provider.
 * - CARD - A credit or debit card that Square does not support.
 * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
 * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
 * - OTHER - A type not listed here.
 */
export declare enum PosPaymentExternalDetailsTypeEnum {
    Check = "check",
    BankTransfer = "bank_transfer",
    OtherGiftCard = "other_gift_card",
    Crypto = "crypto",
    SquareCash = "square_cash",
    Social = "social",
    External = "external",
    Emoney = "emoney",
    Card = "card",
    StoredBalance = "stored_balance",
    FoodVoucher = "food_voucher",
    Other = "other"
}
/**
 * Details about an external payment.
 */
export declare class PosPaymentExternalDetails extends SpeakeasyBase {
    /**
     * A description of the external payment source. For example,
     *
     * @remarks
     * "Food Delivery Service".
     */
    source: string;
    /**
     * The fees paid to the source. The amount minus this field is the net amount seller receives.
     */
    sourceFeeAmount?: number;
    /**
     * An ID to associate the payment to its originating source.
     */
    sourceId?: string;
    /**
     * The type of external payment the seller received. It can be one of the following:
     *
     * @remarks
     * - CHECK - Paid using a physical check.
     * - BANK_TRANSFER - Paid using external bank transfer.
     * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
     * - CRYPTO - Paid using a crypto currency.
     * - SQUARE_CASH - Paid using Square Cash App.
     * - SOCIAL - Paid using peer-to-peer payment applications.
     * - EXTERNAL - A third-party application gathered this payment outside of Square.
     * - EMONEY - Paid using an E-money provider.
     * - CARD - A credit or debit card that Square does not support.
     * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
     * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
     * - OTHER - A type not listed here.
     */
    type: PosPaymentExternalDetailsTypeEnum;
}
export declare enum PosPaymentProcessingFeesTypeEnum {
    Initial = "initial",
    Adjustment = "adjustment"
}
export declare class PosPaymentProcessingFees extends SpeakeasyBase {
    amount?: number;
    effectiveAt?: Date;
    processingType?: PosPaymentProcessingFeesTypeEnum;
}
/**
 * Source of this payment.
 */
export declare enum PosPaymentSourceEnum {
    Card = "card",
    BankAccount = "bank_account",
    Wallet = "wallet",
    Bnpl = "bnpl",
    Cash = "cash",
    External = "external",
    Other = "other"
}
/**
 * Status of this payment.
 */
export declare enum PosPaymentStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Completed = "completed",
    Canceled = "canceled",
    Failed = "failed",
    Other = "other"
}
/**
 * The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
 */
export declare enum PosPaymentWalletDetailsStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Voided = "voided",
    Failed = "failed",
    Other = "other"
}
/**
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
 */
export declare class PosPaymentWalletDetails extends SpeakeasyBase {
    /**
     * The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
     */
    status?: PosPaymentWalletDetailsStatusEnum;
}
export declare class PosPaymentInput extends SpeakeasyBase {
    amount: number;
    /**
     * The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.
     */
    appFee?: number;
    /**
     * The initial amount of money approved for this payment.
     */
    approved?: number;
    /**
     * Card details for this payment. This field is currently not available. Reach out to our team for more info.
     */
    bankAccount?: PosBankAccount;
    cardDetails?: PosPaymentCardDetailsInput;
    /**
     * Cash details for this payment
     */
    cash?: PosPaymentCashDetails;
    changeBackCashAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency: CurrencyEnum;
    customerId: string;
    deviceId?: string;
    employeeId?: string;
    /**
     * Details about an external payment.
     */
    externalDetails?: PosPaymentExternalDetails;
    externalPaymentId?: string;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    locationId?: string;
    merchantId?: string;
    orderId: string;
    processingFees?: PosPaymentProcessingFees[];
    /**
     * The initial amount of money approved for this payment.
     */
    refunded?: number;
    /**
     * Optional service charges or gratuity tip applied to the order.
     */
    serviceCharges?: ServiceChargeInput[];
    /**
     * Source of this payment.
     */
    source?: PosPaymentSourceEnum;
    /**
     * The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.
     */
    sourceId: string;
    /**
     * Status of this payment.
     */
    status?: PosPaymentStatusEnum;
    tax?: number;
    tenderId: string;
    tip?: number;
    total?: number;
    /**
     * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
     */
    wallet?: PosPaymentWalletDetails;
}
export declare class PosPaymentCardDetails extends SpeakeasyBase {
    /**
     * A card's non-confidential details.
     */
    card?: PaymentCard;
}
export declare class PosPayment extends SpeakeasyBase {
    amount: number;
    /**
     * The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.
     */
    appFee?: number;
    /**
     * The initial amount of money approved for this payment.
     */
    approved?: number;
    /**
     * Card details for this payment. This field is currently not available. Reach out to our team for more info.
     */
    bankAccount?: PosBankAccount;
    cardDetails?: PosPaymentCardDetails;
    /**
     * Cash details for this payment
     */
    cash?: PosPaymentCashDetails;
    changeBackCashAmount?: number;
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
    currency: CurrencyEnum;
    customerId: string;
    deviceId?: string;
    employeeId?: string;
    /**
     * Details about an external payment.
     */
    externalDetails?: PosPaymentExternalDetails;
    externalPaymentId?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    locationId?: string;
    merchantId?: string;
    orderId: string;
    processingFees?: PosPaymentProcessingFees[];
    /**
     * The initial amount of money approved for this payment.
     */
    refunded?: number;
    /**
     * Optional service charges or gratuity tip applied to the order.
     */
    serviceCharges?: ServiceCharge[];
    /**
     * Source of this payment.
     */
    source?: PosPaymentSourceEnum;
    /**
     * The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.
     */
    sourceId: string;
    /**
     * Status of this payment.
     */
    status?: PosPaymentStatusEnum;
    tax?: number;
    tenderId: string;
    tip?: number;
    total?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    /**
     * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
     */
    wallet?: PosPaymentWalletDetails;
}
