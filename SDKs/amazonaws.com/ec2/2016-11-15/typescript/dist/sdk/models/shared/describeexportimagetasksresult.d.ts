import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the destination Amazon S3 bucket.
 */
export declare class DescribeExportImageTasksResultExportImageTasksS3ExportLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeExportImageTasksResultExportImageTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an export image task.
 */
export declare class DescribeExportImageTasksResultExportImageTasks extends SpeakeasyBase {
    description?: string;
    exportImageTaskId?: string;
    imageId?: string;
    progress?: string;
    s3ExportLocation?: DescribeExportImageTasksResultExportImageTasksS3ExportLocation;
    status?: string;
    statusMessage?: string;
    tags?: DescribeExportImageTasksResultExportImageTasksTags[];
}
/**
 * Success
 */
export declare class DescribeExportImageTasksResult extends SpeakeasyBase {
    exportImageTasks?: DescribeExportImageTasksResultExportImageTasks[];
    nextToken?: string;
}
