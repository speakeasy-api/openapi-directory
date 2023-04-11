import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon S3 bucket for the disk image.
 */
export declare class ImportSnapshotResultSnapshotTaskDetailUserBucket extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * Information about the import snapshot task.
 */
export declare class ImportSnapshotResultSnapshotTaskDetail extends SpeakeasyBase {
    description?: string;
    diskImageSize?: number;
    encrypted?: boolean;
    format?: string;
    kmsKeyId?: string;
    progress?: string;
    snapshotId?: string;
    status?: string;
    statusMessage?: string;
    url?: string;
    userBucket?: ImportSnapshotResultSnapshotTaskDetailUserBucket;
}
/**
 * Describes a tag.
 */
export declare class ImportSnapshotResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class ImportSnapshotResult extends SpeakeasyBase {
    description?: string;
    importTaskId?: string;
    snapshotTaskDetail?: ImportSnapshotResultSnapshotTaskDetail;
    tags?: ImportSnapshotResultTags[];
}
