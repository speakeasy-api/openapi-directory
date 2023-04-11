import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCShareholderCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The unique ID of the legal arrangement to which the shareholder belongs, if applicable.
     */
    legalArrangementCode?: string;
    /**
     * The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.
     */
    legalArrangementEntityCode?: string;
    /**
     * The code of the shareholder to which the check applies.
     */
    shareholderCode?: string;
}
