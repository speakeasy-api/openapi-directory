import { SpeakeasyBase } from "../../../internal/utils";
import { LensReviewReport } from "./lensreviewreport";
/**
 * Output of a get lens review report call.
 */
export declare class GetLensReviewReportOutput extends SpeakeasyBase {
    /**
     * A report of a lens review.
     */
    lensReviewReport?: LensReviewReport;
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
