import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
import { PayoutScheduleResponse } from "./payoutscheduleresponse";
/**
 * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
 */
export declare enum CreateAccountResponsePayoutSpeedEnum {
    Instant = "INSTANT",
    SameDay = "SAME_DAY",
    Standard = "STANDARD"
}
/**
 * The status of the account.
 *
 * @remarks
 * >Permitted values: `Active`.
 */
export declare enum CreateAccountResponseStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
/**
 * OK - the request has succeeded.
 */
export declare class CreateAccountResponse extends SpeakeasyBase {
    /**
     * The code of the new account.
     */
    accountCode?: string;
    /**
     * The code of the account holder.
     */
    accountHolderCode?: string;
    /**
     * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
     */
    bankAccountUUID?: string;
    /**
     * The description of the account.
     */
    description?: string;
    /**
     * A list of fields that caused the `/createAccount` request to fail.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * A set of key and value pairs containing metadata.
     */
    metadata?: Record<string, string>;
    /**
     * The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.
     */
    payoutMethodCode?: string;
    payoutSchedule?: PayoutScheduleResponse;
    /**
     * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
     */
    payoutSpeed?: CreateAccountResponsePayoutSpeedEnum;
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
    /**
     * The status of the account.
     *
     * @remarks
     * >Permitted values: `Active`.
     */
    status?: CreateAccountResponseStatusEnum;
}
