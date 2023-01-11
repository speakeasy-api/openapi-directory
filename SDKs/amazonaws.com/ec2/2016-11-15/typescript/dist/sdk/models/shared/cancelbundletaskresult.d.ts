import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * If the task fails, a description of the error.
**/
export declare class CancelBundleTaskResultBundleTaskBundleTaskError extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The Amazon S3 storage locations.
**/
export declare class CancelBundleTaskResultBundleTaskStorage extends SpeakeasyBase {
    s3?: S3Storage;
}
/**
 * Information about the bundle task.
**/
export declare class CancelBundleTaskResultBundleTask extends SpeakeasyBase {
    bundleId?: Record<string, any>;
    bundleTaskError?: CancelBundleTaskResultBundleTaskBundleTaskError;
    instanceId?: Record<string, any>;
    progress?: Record<string, any>;
    startTime?: Record<string, any>;
    state?: Record<string, any>;
    storage?: CancelBundleTaskResultBundleTaskStorage;
    updateTime?: Record<string, any>;
}
/**
 * Contains the output of CancelBundleTask.
**/
export declare class CancelBundleTaskResult extends SpeakeasyBase {
    bundleTask?: CancelBundleTaskResultBundleTask;
}
