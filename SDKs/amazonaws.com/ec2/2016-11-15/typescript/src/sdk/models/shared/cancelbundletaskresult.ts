import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";



// CancelBundleTaskResultBundleTaskBundleTaskError
/** 
 * If the task fails, a description of the error.
**/
export class CancelBundleTaskResultBundleTaskBundleTaskError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// CancelBundleTaskResultBundleTaskStorage
/** 
 * The Amazon S3 storage locations.
**/
export class CancelBundleTaskResultBundleTaskStorage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3?: S3Storage;
}


// CancelBundleTaskResultBundleTask
/** 
 * Information about the bundle task.
**/
export class CancelBundleTaskResultBundleTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleId?: Record<string, any>;

  @SpeakeasyMetadata()
  bundleTaskError?: CancelBundleTaskResultBundleTaskBundleTaskError;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  storage?: CancelBundleTaskResultBundleTaskStorage;

  @SpeakeasyMetadata()
  updateTime?: Record<string, any>;
}


// CancelBundleTaskResult
/** 
 * Contains the output of CancelBundleTask.
**/
export class CancelBundleTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleTask?: CancelBundleTaskResultBundleTask;
}
