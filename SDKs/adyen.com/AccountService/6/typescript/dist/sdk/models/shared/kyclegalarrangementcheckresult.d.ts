import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCLegalArrangementCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The unique ID of the legal arrangement to which the check applies.
     */
    legalArrangementCode?: string;
}
