import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunAgent } from "./assessmentrunagent";
/**
 * Success
 */
export declare class ListAssessmentRunAgentsResponse extends SpeakeasyBase {
    assessmentRunAgents: AssessmentRunAgent[];
    nextToken?: string;
}
