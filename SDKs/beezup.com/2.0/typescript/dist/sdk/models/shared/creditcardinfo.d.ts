import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Credit card info
 */
export declare class CreditCardInfo extends SpeakeasyBase {
    /**
     * Card number
     */
    cardNumber: string;
    /**
     * Card Verification Code
     */
    cardVerificationCode: string;
    /**
     * Expiration Month
     */
    expirationMonth: number;
    /**
     * Expiration Year
     */
    expirationYear: number;
}
