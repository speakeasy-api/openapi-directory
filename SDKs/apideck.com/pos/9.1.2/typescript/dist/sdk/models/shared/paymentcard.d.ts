import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * The first six digits of the card number, known as the Bank Identification Number (BIN).
 */
export declare enum PaymentCardCardBrandEnum {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    DiscoverDiners = "discover-diners",
    Jcb = "jcb",
    ChinaUnionpay = "china-unionpay",
    SquareGiftCard = "square-gift-card",
    SquareCapitalCard = "square-capital-card",
    Interac = "interac",
    Eftpos = "eftpos",
    Felica = "felica",
    Ebt = "ebt",
    Other = "other"
}
export declare enum PaymentCardCardTypeEnum {
    Credit = "credit",
    Debit = "debit",
    Prepaid = "prepaid",
    Other = "other"
}
export declare enum PaymentCardPrepaidTypeEnum {
    NonPrepaid = "non-prepaid",
    Prepaid = "prepaid",
    Unknown = "unknown"
}
/**
 * A card's non-confidential details.
 */
export declare class PaymentCardInput extends SpeakeasyBase {
    billingAddress?: Address;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN).
     */
    bin?: string;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN).
     */
    cardBrand?: PaymentCardCardBrandEnum;
    cardType?: PaymentCardCardTypeEnum;
    cardholderName?: string;
    customerId?: string;
    /**
     * Indicates whether or not a card can be used for payments.
     */
    enabled?: boolean;
    /**
     * The expiration month of the associated card as an integer between 1 and 12.
     */
    expMonth?: number;
    /**
     * The four-digit year of the card's expiration date.
     */
    expYear?: number;
    fingerprint?: string;
    last4?: string;
    merchantId?: string;
    prepaidType?: PaymentCardPrepaidTypeEnum;
    /**
     * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
     */
    referenceId?: string;
    version?: string;
}
/**
 * A card's non-confidential details.
 */
export declare class PaymentCard extends SpeakeasyBase {
    billingAddress?: Address;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN).
     */
    bin?: string;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN).
     */
    cardBrand?: PaymentCardCardBrandEnum;
    cardType?: PaymentCardCardTypeEnum;
    cardholderName?: string;
    customerId?: string;
    /**
     * Indicates whether or not a card can be used for payments.
     */
    enabled?: boolean;
    /**
     * The expiration month of the associated card as an integer between 1 and 12.
     */
    expMonth?: number;
    /**
     * The four-digit year of the card's expiration date.
     */
    expYear?: number;
    fingerprint?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    last4?: string;
    merchantId?: string;
    prepaidType?: PaymentCardPrepaidTypeEnum;
    /**
     * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
     */
    referenceId?: string;
    version?: string;
}
