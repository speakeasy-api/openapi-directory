import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCSignatoryCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The code of the signatory to which the check applies.
     */
    signatoryCode?: string;
}
