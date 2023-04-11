import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of recurring contract to be used.
 *
 * @remarks
 * Possible values:
 * * `ONECLICK` – The shopper opts to store their card details for future use. The shopper is present for the subsequent transaction, for cards the security code (CVC/CVV) is required.
 * * `RECURRING` – Payment details are stored for future use. For cards, the security code (CVC/CVV) is not required for subsequent payments. This is used for shopper not present transactions.
 * * `ONECLICK,RECURRING` – Payment details are stored for future use. This allows the use of the stored payment details regardless of whether the shopper is on your site or not.
 */
export declare enum RecurringContractEnum {
    Oneclick = "ONECLICK",
    Recurring = "RECURRING",
    Payout = "PAYOUT"
}
export declare class Recurring extends SpeakeasyBase {
    /**
     * The type of recurring contract to be used.
     *
     * @remarks
     * Possible values:
     * * `ONECLICK` – The shopper opts to store their card details for future use. The shopper is present for the subsequent transaction, for cards the security code (CVC/CVV) is required.
     * * `RECURRING` – Payment details are stored for future use. For cards, the security code (CVC/CVV) is not required for subsequent payments. This is used for shopper not present transactions.
     * * `ONECLICK,RECURRING` – Payment details are stored for future use. This allows the use of the stored payment details regardless of whether the shopper is on your site or not.
     */
    contract?: RecurringContractEnum;
    /**
     * A descriptive name for this detail.
     */
    recurringDetailName?: string;
}
