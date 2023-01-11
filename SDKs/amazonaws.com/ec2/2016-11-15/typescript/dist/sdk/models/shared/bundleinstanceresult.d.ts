import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * If the task fails, a description of the error.
**/
export declare class BundleInstanceResultBundleTaskBundleTaskError extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The Amazon S3 storage locations.
**/
export declare class BundleInstanceResultBundleTaskStorage extends SpeakeasyBase {
    s3?: S3Storage;
}
/**
 * Information about the bundle task.
**/
export declare class BundleInstanceResultBundleTask extends SpeakeasyBase {
    bundleId?: Record<string, any>;
    bundleTaskError?: BundleInstanceResultBundleTaskBundleTaskError;
    instanceId?: Record<string, any>;
    progress?: Record<string, any>;
    startTime?: Record<string, any>;
    state?: Record<string, any>;
    storage?: BundleInstanceResultBundleTaskStorage;
    updateTime?: Record<string, any>;
}
/**
 * Contains the output of BundleInstance.
**/
export declare class BundleInstanceResult extends SpeakeasyBase {
    bundleTask?: BundleInstanceResultBundleTask;
}
