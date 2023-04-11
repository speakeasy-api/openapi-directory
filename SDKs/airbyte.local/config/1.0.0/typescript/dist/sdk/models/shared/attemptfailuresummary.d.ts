import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptFailureReason } from "./attemptfailurereason";
export declare class AttemptFailureSummary extends SpeakeasyBase {
    failures: AttemptFailureReason[];
    /**
     * True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown.
     */
    partialSuccess?: boolean;
}
