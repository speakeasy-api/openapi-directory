import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon S3 bucket for the disk image.
 */
export declare class DescribeImportSnapshotTasksResultImportSnapshotTasksSnapshotTaskDetailUserBucket extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * Describes an import snapshot task.
 */
export declare class DescribeImportSnapshotTasksResultImportSnapshotTasksSnapshotTaskDetail extends SpeakeasyBase {
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
    userBucket?: DescribeImportSnapshotTasksResultImportSnapshotTasksSnapshotTaskDetailUserBucket;
}
/**
 * Describes a tag.
 */
export declare class DescribeImportSnapshotTasksResultImportSnapshotTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an import snapshot task.
 */
export declare class DescribeImportSnapshotTasksResultImportSnapshotTasks extends SpeakeasyBase {
    description?: string;
    importTaskId?: string;
    snapshotTaskDetail?: DescribeImportSnapshotTasksResultImportSnapshotTasksSnapshotTaskDetail;
    tags?: DescribeImportSnapshotTasksResultImportSnapshotTasksTags[];
}
/**
 * Success
 */
export declare class DescribeImportSnapshotTasksResult extends SpeakeasyBase {
    importSnapshotTasks?: DescribeImportSnapshotTasksResultImportSnapshotTasks[];
    nextToken?: string;
}
