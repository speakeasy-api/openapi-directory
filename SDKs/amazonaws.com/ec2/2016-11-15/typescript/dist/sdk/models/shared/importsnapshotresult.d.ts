import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon S3 bucket for the disk image.
**/
export declare class ImportSnapshotResultSnapshotTaskDetailUserBucket extends SpeakeasyBase {
    s3Bucket?: Record<string, any>;
    s3Key?: Record<string, any>;
}
/**
 * Information about the import snapshot task.
**/
export declare class ImportSnapshotResultSnapshotTaskDetail extends SpeakeasyBase {
    description?: Record<string, any>;
    diskImageSize?: Record<string, any>;
    encrypted?: Record<string, any>;
    format?: Record<string, any>;
    kmsKeyId?: Record<string, any>;
    progress?: Record<string, any>;
    snapshotId?: Record<string, any>;
    status?: Record<string, any>;
    statusMessage?: Record<string, any>;
    url?: Record<string, any>;
    userBucket?: ImportSnapshotResultSnapshotTaskDetailUserBucket;
}
export declare class ImportSnapshotResult extends SpeakeasyBase {
    description?: Record<string, any>;
    importTaskId?: Record<string, any>;
    snapshotTaskDetail?: ImportSnapshotResultSnapshotTaskDetail;
    tags?: Record<string, any>;
}
