import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * If the task fails, a description of the error.
 */
export declare class DescribeBundleTasksResultBundleTasksBundleTaskError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the task.
 */
export declare enum DescribeBundleTasksResultBundleTasksStateEnum {
    Pending = "pending",
    WaitingForShutdown = "waiting-for-shutdown",
    Bundling = "bundling",
    Storing = "storing",
    Cancelling = "cancelling",
    Complete = "complete",
    Failed = "failed"
}
/**
 * The Amazon S3 storage locations.
 */
export declare class DescribeBundleTasksResultBundleTasksStorage extends SpeakeasyBase {
    s3?: S3Storage;
}
/**
 * Describes a bundle task.
 */
export declare class DescribeBundleTasksResultBundleTasks extends SpeakeasyBase {
    bundleId?: string;
    bundleTaskError?: DescribeBundleTasksResultBundleTasksBundleTaskError;
    instanceId?: string;
    progress?: string;
    startTime?: Date;
    state?: DescribeBundleTasksResultBundleTasksStateEnum;
    storage?: DescribeBundleTasksResultBundleTasksStorage;
    updateTime?: Date;
}
/**
 * Success
 */
export declare class DescribeBundleTasksResult extends SpeakeasyBase {
    bundleTasks?: DescribeBundleTasksResultBundleTasks[];
}
