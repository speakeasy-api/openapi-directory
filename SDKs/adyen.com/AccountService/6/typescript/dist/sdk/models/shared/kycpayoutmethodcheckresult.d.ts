import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCPayoutMethodCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The unique ID of the payoput method to which the check applies.
     */
    payoutMethodCode?: string;
}
