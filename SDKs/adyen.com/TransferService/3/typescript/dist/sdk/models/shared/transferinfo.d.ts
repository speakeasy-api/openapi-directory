import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CounterpartyInfoV3 } from "./counterpartyinfov3";
/**
 * The type of transfer.
 *
 * @remarks
 *
 * Possible values:
 *
 *  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.
 *
 * - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.
 *
 * - **issuedCard**: Transfer initiated by a Adyen-issued card.
 *
 * - **platformPayment**: Fund movements related to payments that are acquired for your users.
 */
export declare enum TransferInfoCategoryEnum {
    Bank = "bank",
    Internal = "internal",
    IssuedCard = "issuedCard",
    PlatformPayment = "platformPayment"
}
/**
 * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.
 *
 * @remarks
 *
 * Possible values:
 *
 * * **regular**: For normal, low-value transactions.
 *
 * * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.
 *
 * * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.
 *
 * * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
 *
 * * **crossBorder**: High-value transfer to a recipient in a different country.
 *
 * * **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).
 */
export declare enum TransferInfoPriorityEnum {
    CrossBorder = "crossBorder",
    DirectDebit = "directDebit",
    Fast = "fast",
    Instant = "instant",
    Internal = "internal",
    Regular = "regular",
    Wire = "wire"
}
export declare class TransferInfo extends SpeakeasyBase {
    amount: Amount;
    /**
     * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    /**
     * The type of transfer.
     *
     * @remarks
     *
     * Possible values:
     *
     *  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.
     *
     * - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.
     *
     * - **issuedCard**: Transfer initiated by a Adyen-issued card.
     *
     * - **platformPayment**: Fund movements related to payments that are acquired for your users.
     */
    category: TransferInfoCategoryEnum;
    counterparty: CounterpartyInfoV3;
    /**
     * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
     */
    description?: string;
    /**
     * The ID of the resource.
     */
    id?: string;
    /**
     * The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
     */
    paymentInstrumentId?: string;
    /**
     * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.
     *
     * @remarks
     *
     * Possible values:
     *
     * * **regular**: For normal, low-value transactions.
     *
     * * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.
     *
     * * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.
     *
     * * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
     *
     * * **crossBorder**: High-value transfer to a recipient in a different country.
     *
     * * **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).
     */
    priority?: TransferInfoPriorityEnum;
    /**
     * Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.
     */
    reference?: string;
    /**
     *  A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.
     *
     * @remarks
     *
     *  Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.
     *
     * - **internal**: 80 characters
     *
     * - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
     */
    referenceForBeneficiary?: string;
}
