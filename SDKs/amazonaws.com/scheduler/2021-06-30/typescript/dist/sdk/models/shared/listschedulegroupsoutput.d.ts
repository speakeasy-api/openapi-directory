import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleGroupSummary } from "./schedulegroupsummary";
/**
 * Success
 */
export declare class ListScheduleGroupsOutput extends SpeakeasyBase {
    nextToken?: string;
    scheduleGroups: ScheduleGroupSummary[];
}
