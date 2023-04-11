import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTarget } from "./assessmenttarget";
import { FailedItemDetails } from "./faileditemdetails";
/**
 * Success
 */
export declare class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
    assessmentTargets: AssessmentTarget[];
    failedItems: Record<string, FailedItemDetails>;
}
