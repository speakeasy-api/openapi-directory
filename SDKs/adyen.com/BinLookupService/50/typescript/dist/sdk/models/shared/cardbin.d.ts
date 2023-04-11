import { SpeakeasyBase } from "../../../internal/utils";
export declare class CardBin extends SpeakeasyBase {
    /**
     * The first 6 digit of the card number. Enable this field via merchant account settings.
     */
    bin?: string;
    /**
     * If true, it indicates a commercial card. Enable this field via merchant account settings.
     */
    commercial?: boolean;
    /**
     * The card funding source. Valid values are:
     *
     * @remarks
     * * CHARGE
     * * CREDIT
     * * DEBIT
     * * DEFERRED_DEBIT
     * * PREPAID
     * * PREPAID_RELOADABLE
     * * PREPAID_NONRELOADABLE
     * > Enable this field via merchant account settings.
     */
    fundingSource?: string;
    /**
     * Indicates availability of funds.
     *
     * @remarks
     *
     * Visa:
     * * "I" (fast funds are supported)
     * * "N" (otherwise)
     *
     * Mastercard:
     * * "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)
     * * "N" (otherwise)
     * > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".
     */
    fundsAvailability?: string;
    /**
     * The issuing bank of the card.
     */
    issuingBank?: string;
    /**
     * The country where the card was issued from.
     */
    issuingCountry?: string;
    /**
     * The currency of the card.
     */
    issuingCurrency?: string;
    /**
     * The payment method associated with the card (e.g. visa, mc, or amex).
     */
    paymentMethod?: string;
    /**
     * Indicates whether a payout is eligible or not for this card.
     *
     * @remarks
     *
     * Visa:
     * * "Y"
     * * "N"
     *
     * Mastercard:
     * * "Y" (domestic and cross-border)
     * * "D" (only domestic)
     * * "N" (no MoneySend)
     * * "U" (unknown)
     * > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".
     */
    payoutEligible?: string;
    /**
     * The last four digits of the card number.
     */
    summary?: string;
}
