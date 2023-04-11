import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ItvCardDetails extends SpeakeasyBase {
    /**
     * The payment card type (Visa/Mastercard/etc).
     */
    cardType: string;
    /**
     * Expiry date month.
     */
    expMonth: number;
    /**
     * Expiry date year.
     */
    expYear: number;
    /**
     * The last 4 digit of card number.
     */
    last4: string;
}
