import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * If the task fails, a description of the error.
 */
export declare class CancelBundleTaskResultBundleTaskBundleTaskError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the task.
 */
export declare enum CancelBundleTaskResultBundleTaskStateEnum {
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
export declare class CancelBundleTaskResultBundleTaskStorage extends SpeakeasyBase {
    s3?: S3Storage;
}
/**
 * Information about the bundle task.
 */
export declare class CancelBundleTaskResultBundleTask extends SpeakeasyBase {
    bundleId?: string;
    bundleTaskError?: CancelBundleTaskResultBundleTaskBundleTaskError;
    instanceId?: string;
    progress?: string;
    startTime?: Date;
    state?: CancelBundleTaskResultBundleTaskStateEnum;
    storage?: CancelBundleTaskResultBundleTaskStorage;
    updateTime?: Date;
}
/**
 * Contains the output of CancelBundleTask.
 */
export declare class CancelBundleTaskResult extends SpeakeasyBase {
    bundleTask?: CancelBundleTaskResultBundleTask;
}
