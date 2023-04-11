import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { Card } from "./card";
/**
 * The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **Active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **Requested**.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **Active**:  The payment instrument is active and can be used to make payments.
 *
 *  * **Requested**: The payment instrument has been requested. This state is applicable for physical cards.
 *
 * * **Inactive**: The payment instrument is inactive and cannot be used to make payments.
 *
 *  * **Suspended**: The payment instrument is temporarily suspended and cannot be used to make payments.
 *
 *  * **Closed**: The payment instrument is permanently closed. This action cannot be undone.
 *
 * * **Stolen**
 *
 *  * **Lost**
 *
 *
 */
export declare enum UpdatePaymentInstrumentStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Lost = "Lost",
    Requested = "Requested",
    Stolen = "Stolen",
    Suspended = "Suspended",
    Blocked = "blocked",
    Discarded = "discarded"
}
/**
 * Type of payment instrument.
 *
 * @remarks
 *
 * Possible value: **card**, **bankAccount**.
 */
export declare enum UpdatePaymentInstrumentTypeEnum {
    BankAccount = "bankAccount",
    Card = "card"
}
/**
 * OK - the request has succeeded.
 */
export declare class UpdatePaymentInstrument extends SpeakeasyBase {
    /**
     * The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.
     */
    balanceAccountId: string;
    bankAccount?: BankAccount;
    card?: Card;
    /**
     * Your description for the payment instrument, maximum 300 characters.
     */
    description?: string;
    /**
     * The unique identifier of the payment instrument.
     */
    id: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
     */
    issuingCountryCode: string;
    /**
     * The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.
     */
    paymentInstrumentGroupId?: string;
    /**
     * Your reference for the payment instrument, maximum 150 characters.
     */
    reference?: string;
    /**
     * The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **Active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **Requested**.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **Active**:  The payment instrument is active and can be used to make payments.
     *
     *  * **Requested**: The payment instrument has been requested. This state is applicable for physical cards.
     *
     * * **Inactive**: The payment instrument is inactive and cannot be used to make payments.
     *
     *  * **Suspended**: The payment instrument is temporarily suspended and cannot be used to make payments.
     *
     *  * **Closed**: The payment instrument is permanently closed. This action cannot be undone.
     *
     * * **Stolen**
     *
     *  * **Lost**
     *
     *
     */
    status?: UpdatePaymentInstrumentStatusEnum;
    /**
     * Comment for the status of the payment instrument.
     */
    statusComment?: string;
    /**
     * Type of payment instrument.
     *
     * @remarks
     *
     * Possible value: **card**, **bankAccount**.
     */
    type: UpdatePaymentInstrumentTypeEnum;
}
