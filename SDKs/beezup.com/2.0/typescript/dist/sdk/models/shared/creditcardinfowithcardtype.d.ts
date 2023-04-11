import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreditCardInfoWithCardType extends SpeakeasyBase {
    /**
     * Card number
     */
    cardNumber: string;
    /**
     * Your credit card type. Example: VISA, MasterCard, etc...
     */
    cardType: string;
    /**
     * Expiration Month
     */
    expirationMonth: number;
    /**
     * Expiration Year
     */
    expirationYear: number;
}
