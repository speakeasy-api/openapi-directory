import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Amount } from "./amount";
import { Card } from "./card";
import { FundSource } from "./fundsource";
import { Name } from "./name";
import { Recurring } from "./recurring";
/**
 * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
 *
 * @remarks
 * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
 *
 * This field has the following possible values:
 * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
 * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
 * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
 * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
 */
export declare enum PayoutRequestShopperInteractionEnum {
    Ecommerce = "Ecommerce",
    ContAuth = "ContAuth",
    Moto = "Moto",
    Pos = "POS"
}
export declare class PayoutRequest extends SpeakeasyBase {
    amount: Amount;
    billingAddress?: Address;
    card?: Card;
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    fraudOffset?: number;
    fundSource?: FundSource;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    recurring?: Recurring;
    /**
     * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
     *
     * @remarks
     * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
     * Maximum length: 80 characters.
     */
    reference: string;
    /**
     * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
     */
    selectedRecurringDetailReference?: string;
    /**
     * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
     *
     * @remarks
     * > For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.
     */
    shopperEmail?: string;
    /**
     * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
     *
     * @remarks
     * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
     *
     * This field has the following possible values:
     * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
     * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
     * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
     * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
     */
    shopperInteraction?: PayoutRequestShopperInteractionEnum;
    shopperName?: Name;
    /**
     * Required for recurring payments.
     *
     * @remarks
     * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.
     * > Your reference must not include personally identifiable information (PII), for example name or email address.
     */
    shopperReference?: string;
    /**
     * The shopper's telephone number.
     */
    telephoneNumber?: string;
}
