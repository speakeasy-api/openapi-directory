import { SpeakeasyBase } from "../../../internal/utils";
import { LensReview } from "./lensreview";
/**
 * Output of a update lens review call.
 */
export declare class UpdateLensReviewOutput extends SpeakeasyBase {
    /**
     * A lens review of a question.
     */
    lensReview?: LensReview;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
