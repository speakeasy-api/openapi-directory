import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityLevelEnum } from "./severitylevelenum";
import { StatusEnum } from "./statusenum";
/**
 * Describes a problem that is detected by correlating observations.
**/
export declare class Problem extends SpeakeasyBase {
    affectedResource?: string;
    endTime?: Date;
    feedback?: Record<string, string>;
    id?: string;
    insights?: string;
    resourceGroupName?: string;
    severityLevel?: SeverityLevelEnum;
    startTime?: Date;
    status?: StatusEnum;
    title?: string;
}
