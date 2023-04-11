import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusEnum } from "./taskstatusenum";
/**
 * Success
 */
export declare class GetRunTaskResponse extends SpeakeasyBase {
    cpus?: number;
    creationTime?: Date;
    logStream?: string;
    memory?: number;
    name?: string;
    startTime?: Date;
    status?: TaskStatusEnum;
    statusMessage?: string;
    stopTime?: Date;
    taskId?: string;
}
