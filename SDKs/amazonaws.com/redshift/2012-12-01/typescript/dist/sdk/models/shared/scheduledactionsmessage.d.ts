import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionList } from "./scheduledactionlist";
/**
 * Success
 */
export declare class ScheduledActionsMessage extends SpeakeasyBase {
    marker?: string;
    scheduledActions?: ScheduledActionList[];
}
