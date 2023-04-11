import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The schedule type.
 *
 * @remarks
 *
 * Possible values:
 *
 * * **cron**: push out funds based on a cron expression.
 *
 * * **daily**: push out funds daily at 07:00 AM CET.
 *
 * * **weekly**: push out funds every Monday at 07:00 AM CET.
 *
 * * **monthly**: push out funds every first of the month at 07:00 AM CET.
 *
 * * **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.
 */
export declare enum SweepScheduleTypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Balance = "balance",
    Cron = "cron"
}
/**
 * The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.
 */
export declare class SweepSchedule extends SpeakeasyBase {
    /**
     * The schedule type.
     *
     * @remarks
     *
     * Possible values:
     *
     * * **cron**: push out funds based on a cron expression.
     *
     * * **daily**: push out funds daily at 07:00 AM CET.
     *
     * * **weekly**: push out funds every Monday at 07:00 AM CET.
     *
     * * **monthly**: push out funds every first of the month at 07:00 AM CET.
     *
     * * **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.
     */
    type?: SweepScheduleTypeEnum;
}
