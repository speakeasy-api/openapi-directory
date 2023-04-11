import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusEnum } from "./taskstatusenum";
/**
 * A workflow run task.
 */
export declare class TaskListItem extends SpeakeasyBase {
    cpus?: number;
    creationTime?: Date;
    memory?: number;
    name?: string;
    startTime?: Date;
    status?: TaskStatusEnum;
    stopTime?: Date;
    taskId?: string;
}
