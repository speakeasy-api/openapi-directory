import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAction } from "./scheduledaction";
/**
 * Success
 */
export declare class DescribeScheduledActionsResponse extends SpeakeasyBase {
    nextToken?: string;
    scheduledActions?: ScheduledAction[];
}
