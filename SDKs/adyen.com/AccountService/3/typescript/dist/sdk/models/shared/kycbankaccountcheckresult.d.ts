import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCBankAccountCheckResult extends SpeakeasyBase {
    /**
     * The unique ID of the bank account to which the check applies.
     */
    bankAccountUUID?: string;
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
}
