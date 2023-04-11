import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is exported.
 */
export declare enum DescribeExportTasksResultExportTasksExportToS3TaskContainerFormatEnum {
    Ova = "ova"
}
/**
 * The format for the exported image.
 */
export declare enum DescribeExportTasksResultExportTasksExportToS3TaskDiskImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * Information about the export task.
 */
export declare class DescribeExportTasksResultExportTasksExportToS3Task extends SpeakeasyBase {
    containerFormat?: DescribeExportTasksResultExportTasksExportToS3TaskContainerFormatEnum;
    diskImageFormat?: DescribeExportTasksResultExportTasksExportToS3TaskDiskImageFormatEnum;
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * The target virtualization environment.
 */
export declare enum DescribeExportTasksResultExportTasksInstanceExportDetailsTargetEnvironmentEnum {
    Citrix = "citrix",
    Vmware = "vmware",
    Microsoft = "microsoft"
}
/**
 * Information about the instance to export.
 */
export declare class DescribeExportTasksResultExportTasksInstanceExportDetails extends SpeakeasyBase {
    instanceId?: string;
    targetEnvironment?: DescribeExportTasksResultExportTasksInstanceExportDetailsTargetEnvironmentEnum;
}
/**
 * The state of the export task.
 */
export declare enum DescribeExportTasksResultExportTasksStateEnum {
    Active = "active",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a tag.
 */
export declare class DescribeExportTasksResultExportTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an export instance task.
 */
export declare class DescribeExportTasksResultExportTasks extends SpeakeasyBase {
    description?: string;
    exportTaskId?: string;
    exportToS3Task?: DescribeExportTasksResultExportTasksExportToS3Task;
    instanceExportDetails?: DescribeExportTasksResultExportTasksInstanceExportDetails;
    state?: DescribeExportTasksResultExportTasksStateEnum;
    statusMessage?: string;
    tags?: DescribeExportTasksResultExportTasksTags[];
}
/**
 * Success
 */
export declare class DescribeExportTasksResult extends SpeakeasyBase {
    exportTasks?: DescribeExportTasksResultExportTasks[];
}
