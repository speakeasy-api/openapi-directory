import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStateEnum } from "./taskstateenum";
/**
 * Success
 */
export declare class DescribeTaskOutput extends SpeakeasyBase {
    completedAt?: Date;
    createdAt?: Date;
    description?: string;
    lastUpdatedAt?: Date;
    state?: TaskStateEnum;
    tags?: Record<string, string>;
    targets?: string[];
    taskArn?: string;
    taskId?: string;
}
