import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSummary } from "./tasksummary";
/**
 * Success
 */
export declare class ListTasksOutput extends SpeakeasyBase {
    nextToken?: string;
    tasks?: TaskSummary[];
}
