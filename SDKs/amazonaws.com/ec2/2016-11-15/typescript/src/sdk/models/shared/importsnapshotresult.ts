import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportSnapshotResultSnapshotTaskDetailUserBucket
/** 
 * The Amazon S3 bucket for the disk image.
**/
export class ImportSnapshotResultSnapshotTaskDetailUserBucket extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  s3Key?: Record<string, any>;
}


// ImportSnapshotResultSnapshotTaskDetail
/** 
 * Information about the import snapshot task.
**/
export class ImportSnapshotResultSnapshotTaskDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  diskImageSize?: Record<string, any>;

  @SpeakeasyMetadata()
  encrypted?: Record<string, any>;

  @SpeakeasyMetadata()
  format?: Record<string, any>;

  @SpeakeasyMetadata()
  kmsKeyId?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotId?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  url?: Record<string, any>;

  @SpeakeasyMetadata()
  userBucket?: ImportSnapshotResultSnapshotTaskDetailUserBucket;
}


export class ImportSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  importTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotTaskDetail?: ImportSnapshotResultSnapshotTaskDetail;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
