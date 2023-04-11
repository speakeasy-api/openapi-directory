import { SpeakeasyBase } from "../../../internal/utils";
import { TaskListItem } from "./tasklistitem";
/**
 * Success
 */
export declare class ListRunTasksResponse extends SpeakeasyBase {
    items?: TaskListItem[];
    nextToken?: string;
}
