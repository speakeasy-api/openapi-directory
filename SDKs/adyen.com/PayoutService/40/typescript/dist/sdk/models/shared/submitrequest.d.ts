import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Name } from "./name";
import { Recurring } from "./recurring";
/**
 * The type of the entity the payout is processed for.
 *
 * @remarks
 *
 * Allowed values:
 * * NaturalPerson
 * * Company
 * > This field is required to update the existing `entityType` that is associated with this recurring contract.
 */
export declare enum SubmitRequestEntityTypeEnum {
    NaturalPerson = "NaturalPerson",
    Company = "Company"
}
export declare class SubmitRequest extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be required for a particular request.
     */
    additionalData?: Record<string, string>;
    amount: Amount;
    /**
     * The date of birth.
     *
     * @remarks
     * Format: ISO-8601; example: YYYY-MM-DD
     *
     * For Paysafecard it must be the same as used when registering the Paysafecard account.
     *
     * > This field is mandatory for natural persons.
     * > This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.
     */
    dateOfBirth?: Date;
    /**
     * The type of the entity the payout is processed for.
     *
     * @remarks
     *
     * Allowed values:
     * * NaturalPerson
     * * Company
     * > This field is required to update the existing `entityType` that is associated with this recurring contract.
     */
    entityType?: SubmitRequestEntityTypeEnum;
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    fraudOffset?: number;
    /**
     * The merchant account identifier you want to process the transaction request with.
     */
    merchantAccount: string;
    /**
     * The shopper's nationality.
     *
     * @remarks
     *
     * A valid value is an ISO 2-character country code (e.g. 'NL').
     *
     * > This field is required to update the existing nationality that is associated with this recurring contract.
     */
    nationality?: string;
    recurring: Recurring;
    /**
     * The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.
     */
    reference: string;
    /**
     * This is the `recurringDetailReference` you want to use for this payout.
     *
     * @remarks
     *
     * You can use the value LATEST to select the most recently used recurring detail.
     */
    selectedRecurringDetailReference: string;
    /**
     * The shopper's email address.
     */
    shopperEmail: string;
    shopperName?: Name;
    /**
     * The shopper's reference for the payout transaction.
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
}
