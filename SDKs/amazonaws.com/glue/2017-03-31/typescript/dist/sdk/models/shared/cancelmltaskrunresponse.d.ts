import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Success
 */
export declare class CancelMLTaskRunResponse extends SpeakeasyBase {
    status?: TaskStatusTypeEnum;
    taskRunId?: string;
    transformId?: string;
}
