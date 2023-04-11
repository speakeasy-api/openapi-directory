import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentFrameworkShareRequest } from "./assessmentframeworksharerequest";
/**
 * Success
 */
export declare class ListAssessmentFrameworkShareRequestsResponse extends SpeakeasyBase {
    assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[];
    nextToken?: string;
}
