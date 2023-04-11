import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Amount } from "./amount";
import { BankAccount } from "./bankaccount";
import { Card } from "./card";
import { Name } from "./name";
import { Recurring } from "./recurring";
/**
 * The type of the entity the payout is processed for.
 */
export declare enum StoreDetailAndSubmitRequestEntityTypeEnum {
    NaturalPerson = "NaturalPerson",
    Company = "Company"
}
export declare class StoreDetailAndSubmitRequest extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be required for a particular request.
     */
    additionalData?: Record<string, string>;
    amount: Amount;
    bank?: BankAccount;
    billingAddress?: Address;
    card?: Card;
    /**
     * The date of birth.
     *
     * @remarks
     * Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD
     * For Paysafecard it must be the same as used when registering the Paysafecard account.
     * > This field is mandatory for natural persons.
     */
    dateOfBirth: Date;
    /**
     * The type of the entity the payout is processed for.
     */
    entityType: StoreDetailAndSubmitRequestEntityTypeEnum;
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    fraudOffset?: number;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The shopper's nationality.
     *
     * @remarks
     *
     * A valid value is an ISO 2-character country code (e.g. 'NL').
     */
    nationality: string;
    recurring: Recurring;
    /**
     * The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.
     */
    reference: string;
    /**
     * The name of the brand to make a payout to.
     *
     * @remarks
     *
     * For Paysafecard it must be set to `paysafecard`.
     */
    selectedBrand?: string;
    /**
     * The shopper's email address.
     */
    shopperEmail: string;
    shopperName?: Name;
    /**
     * The shopper's reference for the payment transaction.
     */
    shopperReference: string;
    /**
     * The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).
     */
    shopperStatement?: string;
    /**
     * The shopper's social security number.
     */
    socialSecurityNumber?: string;
    /**
     * The shopper's phone number.
     */
    telephoneNumber?: string;
}
