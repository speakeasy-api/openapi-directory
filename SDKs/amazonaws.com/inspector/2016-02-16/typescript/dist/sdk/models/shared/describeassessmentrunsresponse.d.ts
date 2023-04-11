import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRun } from "./assessmentrun";
import { FailedItemDetails } from "./faileditemdetails";
/**
 * Success
 */
export declare class DescribeAssessmentRunsResponse extends SpeakeasyBase {
    assessmentRuns: AssessmentRun[];
    failedItems: Record<string, FailedItemDetails>;
}
