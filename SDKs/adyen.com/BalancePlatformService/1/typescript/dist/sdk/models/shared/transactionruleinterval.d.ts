import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.
 *
 * @remarks
 *
 * Possible values:
 *   * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.
 *  * **daily**: the counters are reset daily at 00:00:00 UTC.
 *  * **weekly**: the counters are reset every Monday at 00:00:00 UTC.
 *  * **monthly**: the counters reset every first day of the month at 00:00:00 UTC.
 *  * **lifetime**: conditions are applied to the lifetime of the payment instrument.
 *
 */
export declare enum TransactionRuleIntervalTypeEnum {
    Daily = "daily",
    Lifetime = "lifetime",
    Monthly = "monthly",
    PerTransaction = "perTransaction",
    Weekly = "weekly"
}
export declare class TransactionRuleInterval extends SpeakeasyBase {
    /**
     * The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.
     *
     * @remarks
     *
     * Possible values:
     *   * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.
     *  * **daily**: the counters are reset daily at 00:00:00 UTC.
     *  * **weekly**: the counters are reset every Monday at 00:00:00 UTC.
     *  * **monthly**: the counters reset every first day of the month at 00:00:00 UTC.
     *  * **lifetime**: conditions are applied to the lifetime of the payment instrument.
     *
     */
    type: TransactionRuleIntervalTypeEnum;
}
