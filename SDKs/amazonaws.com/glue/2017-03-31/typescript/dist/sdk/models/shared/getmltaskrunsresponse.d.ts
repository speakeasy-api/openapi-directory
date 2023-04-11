import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRun } from "./taskrun";
/**
 * Success
 */
export declare class GetMLTaskRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    taskRuns?: TaskRun[];
}
