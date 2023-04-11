import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * If the task fails, a description of the error.
 */
export declare class BundleInstanceResultBundleTaskBundleTaskError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the task.
 */
export declare enum BundleInstanceResultBundleTaskStateEnum {
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
export declare class BundleInstanceResultBundleTaskStorage extends SpeakeasyBase {
    s3?: S3Storage;
}
/**
 * Information about the bundle task.
 */
export declare class BundleInstanceResultBundleTask extends SpeakeasyBase {
    bundleId?: string;
    bundleTaskError?: BundleInstanceResultBundleTaskBundleTaskError;
    instanceId?: string;
    progress?: string;
    startTime?: Date;
    state?: BundleInstanceResultBundleTaskStateEnum;
    storage?: BundleInstanceResultBundleTaskStorage;
    updateTime?: Date;
}
/**
 * Contains the output of BundleInstance.
 */
export declare class BundleInstanceResult extends SpeakeasyBase {
    bundleTask?: BundleInstanceResultBundleTask;
}
