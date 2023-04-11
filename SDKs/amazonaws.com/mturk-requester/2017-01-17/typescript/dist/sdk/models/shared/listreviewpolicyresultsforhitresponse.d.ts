import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { ReviewReport } from "./reviewreport";
/**
 * Success
 */
export declare class ListReviewPolicyResultsForHITResponse extends SpeakeasyBase {
    assignmentReviewPolicy?: ReviewPolicy;
    assignmentReviewReport?: ReviewReport;
    hitId?: string;
    hitReviewPolicy?: ReviewPolicy;
    hitReviewReport?: ReviewReport;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
     */
    nextToken?: string;
}
