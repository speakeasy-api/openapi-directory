import { SpeakeasyBase } from "../../../internal/utils";
import { LensReview } from "./lensreview";
/**
 * Output of a get lens review call.
 */
export declare class GetLensReviewOutput extends SpeakeasyBase {
    /**
     * A lens review of a question.
     */
    lensReview?: LensReview;
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
