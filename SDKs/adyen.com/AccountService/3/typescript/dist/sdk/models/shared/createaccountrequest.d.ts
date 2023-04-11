import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payout schedule of the prospective account.
 *
 * @remarks
 * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
 */
export declare enum CreateAccountRequestPayoutScheduleEnum {
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
export declare class CreateAccountRequest extends SpeakeasyBase {
    /**
     * The code of Account Holder under which to create the account.
     */
    accountHolderCode: string;
    /**
     * The payout schedule of the prospective account.
     *
     * @remarks
     * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
     */
    payoutSchedule?: CreateAccountRequestPayoutScheduleEnum;
    /**
     * The reason for the payout schedule choice.
     *
     * @remarks
     * >Required if the payoutSchedule is `HOLD`.
     */
    payoutScheduleReason?: string;
}
