import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CostEstimateAssumptions } from "./costestimateassumptions";
import { MerchantDetails } from "./merchantdetails";
import { Recurring } from "./recurring";
/**
 * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
 *
 * @remarks
 * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
 *
 * This field has the following possible values:
 * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
 * * `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
 * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
 * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
 */
export declare enum CostEstimateRequestShopperInteractionEnum {
    Ecommerce = "Ecommerce",
    ContAuth = "ContAuth",
    Moto = "Moto",
    Pos = "POS"
}
export declare class CostEstimateRequest extends SpeakeasyBase {
    amount: Amount;
    assumptions?: CostEstimateAssumptions;
    /**
     * The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.
     *
     * @remarks
     *
     * > Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.
     */
    cardNumber?: string;
    /**
     * Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.
     *
     * @remarks
     *
     * > Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.
     */
    encryptedCardNumber?: string;
    /**
     * The merchant account identifier you want to process the (transaction) request with.
     */
    merchantAccount: string;
    merchantDetails?: MerchantDetails;
    recurring?: Recurring;
    /**
     * The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.
     */
    selectedRecurringDetailReference?: string;
    /**
     * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
     *
     * @remarks
     * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
     *
     * This field has the following possible values:
     * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
     * * `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
     * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
     * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
     */
    shopperInteraction?: CostEstimateRequestShopperInteractionEnum;
    /**
     * Required for recurring payments.
     *
     * @remarks
     * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.
     * > Your reference must not include personally identifiable information (PII), for example name or email address.
     */
    shopperReference?: string;
}
