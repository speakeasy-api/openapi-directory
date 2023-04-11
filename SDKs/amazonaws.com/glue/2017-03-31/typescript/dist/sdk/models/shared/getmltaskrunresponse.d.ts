import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Success
 */
export declare class GetMLTaskRunResponse extends SpeakeasyBase {
    completedOn?: Date;
    errorString?: string;
    executionTime?: number;
    lastModifiedOn?: Date;
    logGroupName?: string;
    properties?: TaskRunProperties;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
    taskRunId?: string;
    transformId?: string;
}
