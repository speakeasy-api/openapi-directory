import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckStatusData } from "./kyccheckstatusdata";
export declare class KYCLegalArrangementEntityCheckResult extends SpeakeasyBase {
    /**
     * A list of the checks and their statuses.
     */
    checks?: KYCCheckStatusData[];
    /**
     * The unique ID of the legal arrangement to which the entity belongs.
     */
    legalArrangementCode?: string;
    /**
     * The unique ID of the legal arrangement entity to which the check applies.
     */
    legalArrangementEntityCode?: string;
}
