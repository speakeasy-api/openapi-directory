import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutScheduleResponse } from "./payoutscheduleresponse";
export declare class Account extends SpeakeasyBase {
    /**
     * The code of the account.
     */
    accountCode?: string;
    /**
     * The beneficiary of the account.
     */
    beneficiaryAccount?: string;
    /**
     * The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user.
     */
    beneficiaryMerchantReference?: string;
    payoutSchedule?: PayoutScheduleResponse;
}
