import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";



// BundleInstanceResultBundleTaskBundleTaskError
/** 
 * If the task fails, a description of the error.
**/
export class BundleInstanceResultBundleTaskBundleTaskError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// BundleInstanceResultBundleTaskStorage
/** 
 * The Amazon S3 storage locations.
**/
export class BundleInstanceResultBundleTaskStorage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3?: S3Storage;
}


// BundleInstanceResultBundleTask
/** 
 * Information about the bundle task.
**/
export class BundleInstanceResultBundleTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleId?: Record<string, any>;

  @SpeakeasyMetadata()
  bundleTaskError?: BundleInstanceResultBundleTaskBundleTaskError;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  storage?: BundleInstanceResultBundleTaskStorage;

  @SpeakeasyMetadata()
  updateTime?: Record<string, any>;
}


// BundleInstanceResult
/** 
 * Contains the output of BundleInstance.
**/
export class BundleInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleTask?: BundleInstanceResultBundleTask;
}
