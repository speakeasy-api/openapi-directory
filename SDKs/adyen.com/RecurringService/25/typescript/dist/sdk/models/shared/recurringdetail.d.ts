import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { Card } from "./card";
import { Name } from "./name";
import { TokenDetails } from "./tokendetails";
export declare class RecurringDetail extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be returned in a particular response.
     *
     * @remarks
     *
     * The additionalData object consists of entries, each of which includes the key and value.
     */
    additionalData?: Record<string, string>;
    /**
     * The alias of the credit card number.
     *
     * @remarks
     *
     * Applies only to recurring contracts storing credit card details
     */
    alias?: string;
    /**
     * The alias type of the credit card number.
     *
     * @remarks
     *
     * Applies only to recurring contracts storing credit card details.
     */
    aliasType?: string;
    bank?: BankAccount;
    billingAddress?: Address;
    card?: Card;
    /**
     * Types of recurring contracts.
     */
    contractTypes?: string[];
    /**
     * The date when the recurring details were created.
     */
    creationDate?: Date;
    /**
     * The `pspReference` of the first recurring payment that created the recurring detail.
     */
    firstPspReference?: string;
    /**
     * An optional descriptive name for this recurring detail.
     */
    name?: string;
    /**
     * The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
     */
    paymentMethodVariant?: string;
    /**
     * The reference that uniquely identifies the recurring detail.
     */
    recurringDetailReference: string;
    shopperName?: Name;
    /**
     * A shopper's social security number (only in countries where it is legal to collect).
     */
    socialSecurityNumber?: string;
    tokenDetails?: TokenDetails;
    /**
     * The payment method, such as “mc", "visa", "ideal", "paypal".
     */
    variant: string;
}
