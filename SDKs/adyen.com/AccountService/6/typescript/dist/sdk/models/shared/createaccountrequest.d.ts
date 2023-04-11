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
/**
 * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
 */
export declare enum CreateAccountRequestPayoutSpeedEnum {
    Instant = "INSTANT",
    SameDay = "SAME_DAY",
    Standard = "STANDARD"
}
export declare class CreateAccountRequest extends SpeakeasyBase {
    /**
     * The code of Account Holder under which to create the account.
     */
    accountHolderCode: string;
    /**
     * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
     */
    bankAccountUUID?: string;
    /**
     * A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
     */
    description?: string;
    /**
     * A set of key and value pairs for general use by the merchant.
     *
     * @remarks
     * The keys do not have specific names and may be used for storing miscellaneous data as desired.
     * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
     */
    metadata?: Record<string, string>;
    /**
     * The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.
     */
    payoutMethodCode?: string;
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
    /**
     * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
     */
    payoutSpeed?: CreateAccountRequestPayoutSpeedEnum;
}
