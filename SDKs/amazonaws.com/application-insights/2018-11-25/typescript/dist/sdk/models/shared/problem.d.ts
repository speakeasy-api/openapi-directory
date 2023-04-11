import { SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueEnum } from "./feedbackvalueenum";
import { SeverityLevelEnum } from "./severitylevelenum";
import { StatusEnum } from "./statusenum";
/**
 * Describes a problem that is detected by correlating observations.
 */
export declare class Problem extends SpeakeasyBase {
    affectedResource?: string;
    endTime?: Date;
    feedback?: Record<string, FeedbackValueEnum>;
    id?: string;
    insights?: string;
    lastRecurrenceTime?: Date;
    recurringCount?: number;
    resourceGroupName?: string;
    severityLevel?: SeverityLevelEnum;
    startTime?: Date;
    status?: StatusEnum;
    title?: string;
}
