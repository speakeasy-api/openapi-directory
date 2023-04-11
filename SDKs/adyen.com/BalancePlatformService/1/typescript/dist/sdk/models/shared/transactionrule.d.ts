import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { TransactionRuleInterval } from "./transactionruleinterval";
export declare enum TransactionRuleEntryModesEnum {
    Barcode = "barcode",
    Chip = "chip",
    Cof = "cof",
    Contactless = "contactless",
    Magstripe = "magstripe",
    Manual = "manual",
    Ocr = "ocr",
    Server = "server",
    Unknown = "unknown"
}
export declare enum TransactionRuleProcessingTypesEnum {
    AtmWithdraw = "atmWithdraw",
    BalanceInquiry = "balanceInquiry",
    Ecommerce = "ecommerce",
    Moto = "moto",
    Pos = "pos",
    Recurring = "recurring",
    Token = "token",
    Unknown = "unknown"
}
/**
 * The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created
 *
 * @remarks
 * with an **active** status.
 *
 * Possible values: **active**, **inactive**.
 */
export declare enum TransactionRuleStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Type of conditions provided in the rule.
 *
 * @remarks
 *
 * Possible values:
 *   * **allowList**: The rule provides categories (such as country and MCC) where payments must be allowed.
 *  * **blockList**: The rule provides categories (such as country and MCC) where payments must be blocked.
 *  * **maxUsage**: The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.
 *  * **velocity**: The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.
 *
 */
export declare enum TransactionRuleTypeEnum {
    AllowList = "allowList",
    BlockList = "blockList",
    MaxUsage = "maxUsage",
    Velocity = "velocity"
}
/**
 * OK - the request has succeeded.
 */
export declare class TransactionRule extends SpeakeasyBase {
    amount?: Amount;
    /**
     * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/get/balancePlatforms/{id}__queryParam_id) to which the rule applies.
     */
    balancePlatformId?: string;
    /**
     * List of countries to which the rule applies. For example: **["NL","US"]**.
     */
    countries?: string[];
    /**
     * Your description for the transaction rule, maximum 300 characters.
     */
    description: string;
    /**
     * The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.
     *
     * @remarks
     *
     * If not provided, the rule will be evaluated until the rule status is set to **inactive**.
     */
    endDate?: string;
    /**
     * List of point-of-sale entry modes to which the rule applies.
     *
     * @remarks
     *
     * Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **token**, **server**, **barcode**, **ocr**.
     */
    entryModes?: TransactionRuleEntryModesEnum[];
    /**
     * The unique identifier of the transaction rule.
     */
    id?: string;
    interval: TransactionRuleInterval;
    /**
     * The maximum number of transactions that a payment instrument can be used for in the period specified in the `interval.type`.
     */
    maxTransactions?: number;
    /**
     * List of Merchant Category Codes (MCCs) to which the rule applies.
     */
    mccs?: string[];
    /**
     * The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstrumentGroups__resParam_id) to which the rule applies.
     */
    paymentInstrumentGroupId?: string;
    /**
     * The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id) to which the rule applies.
     */
    paymentInstrumentId?: string;
    /**
     * List of processing types to which the rule applies.
     *
     * @remarks
     *
     * Possible values: **atmWithdraw**, **pos**, **ecommerce**, **moto**, **recurring**, **balanceInquiry**.
     */
    processingTypes?: TransactionRuleProcessingTypesEnum[];
    /**
     * Your reference for the transaction rule, maximum 150 characters.
     */
    reference: string;
    /**
     * The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.
     *
     * @remarks
     *
     * If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**.
     *
     *
     */
    startDate?: string;
    /**
     * The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created
     *
     * @remarks
     * with an **active** status.
     *
     * Possible values: **active**, **inactive**.
     */
    status?: TransactionRuleStatusEnum;
    /**
     * Type of conditions provided in the rule.
     *
     * @remarks
     *
     * Possible values:
     *   * **allowList**: The rule provides categories (such as country and MCC) where payments must be allowed.
     *  * **blockList**: The rule provides categories (such as country and MCC) where payments must be blocked.
     *  * **maxUsage**: The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.
     *  * **velocity**: The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.
     *
     */
    type: TransactionRuleTypeEnum;
}
