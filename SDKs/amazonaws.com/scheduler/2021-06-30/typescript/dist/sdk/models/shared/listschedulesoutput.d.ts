import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleSummary } from "./schedulesummary";
/**
 * Success
 */
export declare class ListSchedulesOutput extends SpeakeasyBase {
    nextToken?: string;
    schedules: ScheduleSummary[];
}
