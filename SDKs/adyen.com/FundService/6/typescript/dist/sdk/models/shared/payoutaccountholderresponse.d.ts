import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
 */
export declare enum PayoutAccountHolderResponsePayoutSpeedEnum {
    Instant = "INSTANT",
    SameDay = "SAME_DAY",
    Standard = "STANDARD"
}
/**
 * OK - the request has succeeded.
 */
export declare class PayoutAccountHolderResponse extends SpeakeasyBase {
    /**
     * The unique ID of the Bank Account to which the payout was made.
     */
    bankAccountUUID?: string;
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.
     */
    merchantReference?: string;
    /**
     * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
     */
    payoutSpeed?: PayoutAccountHolderResponsePayoutSpeedEnum;
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
}
