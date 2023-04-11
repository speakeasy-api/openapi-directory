import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCShareholderCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The code of the shareholder to which the check applies.
     */
    shareholderCode?: string;
}
