import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The brand of the card if the payment method is a card.
 */
export declare enum PaymentMethodBrandEnum {
    Visa = "Visa",
    MasterCard = "MasterCard",
    AmericanExpress = "AmericanExpress",
    Other = "Other"
}
/**
 * The type of payment method.
 */
export declare enum PaymentMethodTypeEnum {
    Card = "Card",
    Wallet = "Wallet"
}
/**
 * The created payment method.
 */
export declare class PaymentMethod extends SpeakeasyBase {
    /**
     * The balance of the wallet if the payment method is a wallet.
     */
    balance?: number;
    /**
     * The brand of the card if the payment method is a card.
     */
    brand?: PaymentMethodBrandEnum;
    /**
     * The currency code of the wallet if the payment method is a wallet.
     */
    currency?: string;
    /**
     * A short description of a payment method.
     *
     * @remarks
     *
     * If the payment method is of type `Wallet` this will be "My Wallet"
     *
     * For `Card` type payment methods the format of this description may differ
     * depending on the payment gateway in use. In the case of Stripe, this will
     * be in the format "Visa (**** 4242, exp 08/19)"
     *
     */
    description: string;
    /**
     * The expiry month of the card if the payment method is a card.
     */
    expiryMonth?: number;
    /**
     * The expiry year of the card if the payment method is a card.
     */
    expiryYear?: number;
    /**
     * The unique identifier of a payment method.
     */
    id: string;
    /**
     * The last digits of the card if the payment method is a card.
     *
     * @remarks
     * Depending on the payment gateway in use this value may be undefined.
     *
     */
    lastDigits?: number;
    /**
     * The type of payment method.
     */
    type: PaymentMethodTypeEnum;
}
