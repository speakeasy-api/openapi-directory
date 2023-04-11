import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payout schedule of the account.
 *
 * @remarks
 * Permitted values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.
 */
export declare enum PayoutScheduleResponseScheduleEnum {
    BiweeklyOn1StAnd15ThAtMidnight = "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT",
    Daily = "DAILY",
    DailyAu = "DAILY_AU",
    DailyEu = "DAILY_EU",
    DailySg = "DAILY_SG",
    DailyUs = "DAILY_US",
    Hold = "HOLD",
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
    WeeklyOnTueFriMidnight = "WEEKLY_ON_TUE_FRI_MIDNIGHT"
}
export declare class PayoutScheduleResponse extends SpeakeasyBase {
    /**
     * The date of the next scheduled payout.
     */
    nextScheduledPayout?: Date;
    /**
     * The payout schedule of the account.
     *
     * @remarks
     * Permitted values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.
     */
    schedule?: PayoutScheduleResponseScheduleEnum;
}
