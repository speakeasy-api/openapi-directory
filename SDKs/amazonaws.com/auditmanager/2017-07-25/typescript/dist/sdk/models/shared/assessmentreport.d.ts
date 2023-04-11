import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";
/**
 *  A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment.
 */
export declare class AssessmentReport extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    author?: string;
    awsAccountId?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    name?: string;
    status?: AssessmentReportStatusEnum;
}
