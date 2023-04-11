import { SpeakeasyBase } from "../../../internal/utils";
import { BatchLoadTask } from "./batchloadtask";
/**
 * Success
 */
export declare class ListBatchLoadTasksResponse extends SpeakeasyBase {
    batchLoadTasks?: BatchLoadTask[];
    nextToken?: string;
}
