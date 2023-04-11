import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
import { DurationRange } from "./durationrange";
import { TimestampRange } from "./timestamprange";
/**
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
 */
export declare class AssessmentRunFilter extends SpeakeasyBase {
    completionTimeRange?: TimestampRange;
    durationRange?: DurationRange;
    namePattern?: string;
    rulesPackageArns?: string[];
    startTimeRange?: TimestampRange;
    stateChangeTimeRange?: TimestampRange;
    states?: AssessmentRunStateEnum[];
}
