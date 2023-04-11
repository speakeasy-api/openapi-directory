import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <p>The state of the task. The task can be in one of the following states:</p> <ul> <li> <p> <code>pending</code> - the replacement volume is being created.</p> </li> <li> <p> <code>in-progress</code> - the original volume is being detached and the replacement volume is being attached.</p> </li> <li> <p> <code>succeeded</code> - the replacement volume has been successfully attached to the instance and the instance is available.</p> </li> <li> <p> <code>failing</code> - the replacement task is in the process of failing.</p> </li> <li> <p> <code>failed</code> - the replacement task has failed but the original root volume is still attached.</p> </li> <li> <p> <code>failing-detached</code> - the replacement task is in the process of failing. The instance might have no root volume attached.</p> </li> <li> <p> <code>failed-detached</code> - the replacement task has failed and the instance has no root volume attached.</p> </li> </ul>
 */
export declare enum DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasksTaskStateEnum {
    Pending = "pending",
    InProgress = "in-progress",
    Failing = "failing",
    Succeeded = "succeeded",
    Failed = "failed",
    FailedDetached = "failed-detached"
}
/**
 * Information about a root volume replacement task.
 */
export declare class DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasks extends SpeakeasyBase {
    completeTime?: string;
    deleteReplacedRootVolume?: boolean;
    imageId?: string;
    instanceId?: string;
    replaceRootVolumeTaskId?: string;
    snapshotId?: string;
    startTime?: string;
    tags?: DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasksTags[];
    taskState?: DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasksTaskStateEnum;
}
/**
 * Success
 */
export declare class DescribeReplaceRootVolumeTasksResult extends SpeakeasyBase {
    nextToken?: string;
    replaceRootVolumeTasks?: DescribeReplaceRootVolumeTasksResultReplaceRootVolumeTasks[];
}
