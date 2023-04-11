import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines how long it takes for the funds to reach the bank account. Adyen pays out based on the [payout frequency](https://docs.adyen.com/account/getting-paid#payout-frequency). Depending on the currencies and banks involved in transferring the money, it may take up to three days for the payout funds to arrive in the bank account.
 *
 * @remarks
 *
 *  Possible values:
 * * **first**: same day.
 * * **urgent**: the next day.
 * * **normal**: between 1 and 3 days.
 */
export declare enum PayoutSettingsPriorityEnum {
    First = "first",
    Normal = "normal",
    Urgent = "urgent"
}
/**
 * The status of the verification process for the bank account.
 *
 * @remarks
 *
 * Possible values:
 * * **valid**: the verification was successful.
 * * **pending**: the verification is in progress.
 * * **invalid**: the information provided is not complete.
 * * **rejected**:  there are reasons to refuse working with this entity.
 */
export declare enum PayoutSettingsVerificationStatusEnum {
    Invalid = "invalid",
    Pending = "pending",
    Rejected = "rejected",
    Valid = "valid"
}
/**
 * OK - the request has succeeded.
 */
export declare class PayoutSettings extends SpeakeasyBase {
    /**
     * Indicates if payouts to the bank account are allowed. This value is set automatically based on the status of the verification process. The value is:
     *
     * @remarks
     *
     * * **true** if `verificationStatus` is **valid**.
     * * **false** for all other values.
     */
    allowed?: boolean;
    /**
     * Indicates if payouts to this bank account are enabled. Default: **true**.
     *
     * @remarks
     *
     * To receive payouts into this bank account, both `enabled` and `allowed` must be **true**.
     */
    enabled?: boolean;
    /**
     * The date when Adyen starts paying out to this bank account.
     *
     * @remarks
     *
     * Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime), for example, **2019-11-23T12:25:28Z** or **2020-05-27T20:25:28+08:00**.
     *
     * If not specified, the `enabled` field indicates if payouts are enabled for this bank account.
     *
     * If a date is specified and:
     *
     * * `enabled`: **true**, payouts are enabled starting the specified date.
     * * `enabled`: **false**, payouts are disabled until the specified date. On the specified date, `enabled` changes to **true** and this field is reset to **null**.
     */
    enabledFromDate?: string;
    /**
     * The unique identifier of the payout setting.
     */
    id: string;
    /**
     * Determines how long it takes for the funds to reach the bank account. Adyen pays out based on the [payout frequency](https://docs.adyen.com/account/getting-paid#payout-frequency). Depending on the currencies and banks involved in transferring the money, it may take up to three days for the payout funds to arrive in the bank account.
     *
     * @remarks
     *
     *  Possible values:
     * * **first**: same day.
     * * **urgent**: the next day.
     * * **normal**: between 1 and 3 days.
     */
    priority?: PayoutSettingsPriorityEnum;
    /**
     * The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the bank account.
     */
    transferInstrumentId: string;
    /**
     * The status of the verification process for the bank account.
     *
     * @remarks
     *
     * Possible values:
     * * **valid**: the verification was successful.
     * * **pending**: the verification is in progress.
     * * **invalid**: the information provided is not complete.
     * * **rejected**:  there are reasons to refuse working with this entity.
     */
    verificationStatus?: PayoutSettingsVerificationStatusEnum;
}
