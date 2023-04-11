import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTemplate } from "./assessmenttemplate";
import { FailedItemDetails } from "./faileditemdetails";
/**
 * Success
 */
export declare class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
    assessmentTemplates: AssessmentTemplate[];
    failedItems: Record<string, FailedItemDetails>;
}
