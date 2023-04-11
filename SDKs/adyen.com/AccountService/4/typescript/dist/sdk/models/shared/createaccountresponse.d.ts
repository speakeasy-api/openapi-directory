import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutScheduleResponse } from "./payoutscheduleresponse";
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
     * The description of the account.
     */
    description?: string;
    payoutSchedule?: PayoutScheduleResponse;
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
    /**
     * Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
     *
     * @remarks
     * * **true**: The request is queued and will be executed when the providing service is available in the order in which the requests are received.
     * * **false**: The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
     */
    submittedAsync?: boolean;
}
