import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
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
export declare enum StoredValueIssueRequestShopperInteractionEnum {
    Ecommerce = "Ecommerce",
    ContAuth = "ContAuth",
    Moto = "Moto",
    Pos = "POS"
}
export declare class StoredValueIssueRequest extends SpeakeasyBase {
    amount?: Amount;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The collection that contains the type of the payment method and its specific information if available
     */
    paymentMethod: Record<string, string>;
    recurringDetailReference?: string;
    /**
     * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
     *
     * @remarks
     * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
     * Maximum length: 80 characters.
     */
    reference: string;
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
    shopperInteraction?: StoredValueIssueRequestShopperInteractionEnum;
    shopperReference?: string;
    /**
     * The physical store, for which this payment is processed.
     */
    store?: string;
}
