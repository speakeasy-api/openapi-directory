import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCUltimateParentCompanyCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The code of the Ultimate Parent Company to which the check applies.
     */
    ultimateParentCompanyCode?: string;
}
