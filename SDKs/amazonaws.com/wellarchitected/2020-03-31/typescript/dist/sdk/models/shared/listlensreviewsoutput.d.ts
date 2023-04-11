import { SpeakeasyBase } from "../../../internal/utils";
import { LensReviewSummary } from "./lensreviewsummary";
/**
 * Output of a list lens reviews call.
 */
export declare class ListLensReviewsOutput extends SpeakeasyBase {
    /**
     * List of lens summaries of lens reviews of a workload.
     */
    lensReviewSummaries?: LensReviewSummary[];
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
