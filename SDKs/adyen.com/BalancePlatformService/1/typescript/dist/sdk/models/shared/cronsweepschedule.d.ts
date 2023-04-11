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
export declare enum CronSweepScheduleTypeEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Balance = "balance",
    Cron = "cron"
}
/**
 * The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.
 */
export declare class CronSweepSchedule extends SpeakeasyBase {
    /**
     * A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.
     *
     * @remarks
     *
     * The expression must have five values separated by a single space in the following order:
     *
     * * Minute: **0-59**
     *
     * * Hour: **0-23**
     *
     * * Day of the month: **1-31**
     *
     * * Month: **1-12** or **JAN-DEC**
     *
     * * Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.
     *
     * The following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and ** /**. See [crontab guru](https://crontab.guru/) for more examples.
     */
    cronExpression: string;
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
    type?: CronSweepScheduleTypeEnum;
}
