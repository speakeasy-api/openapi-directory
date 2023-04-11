import { SpeakeasyBase } from "../../../internal/utils";
import { AppAssessmentSummary } from "./appassessmentsummary";
/**
 * Success
 */
export declare class ListAppAssessmentsResponse extends SpeakeasyBase {
    assessmentSummaries: AppAssessmentSummary[];
    nextToken?: string;
}
