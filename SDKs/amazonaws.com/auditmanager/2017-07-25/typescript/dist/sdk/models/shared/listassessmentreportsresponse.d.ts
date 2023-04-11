import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportMetadata } from "./assessmentreportmetadata";
/**
 * Success
 */
export declare class ListAssessmentReportsResponse extends SpeakeasyBase {
    assessmentReports?: AssessmentReportMetadata[];
    nextToken?: string;
}
