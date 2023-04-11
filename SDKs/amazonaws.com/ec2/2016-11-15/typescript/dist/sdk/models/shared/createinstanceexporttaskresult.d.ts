import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is exported.
 */
export declare enum CreateInstanceExportTaskResultExportTaskExportToS3TaskContainerFormatEnum {
    Ova = "ova"
}
/**
 * The format for the exported image.
 */
export declare enum CreateInstanceExportTaskResultExportTaskExportToS3TaskDiskImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * Information about the export task.
 */
export declare class CreateInstanceExportTaskResultExportTaskExportToS3Task extends SpeakeasyBase {
    containerFormat?: CreateInstanceExportTaskResultExportTaskExportToS3TaskContainerFormatEnum;
    diskImageFormat?: CreateInstanceExportTaskResultExportTaskExportToS3TaskDiskImageFormatEnum;
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * The target virtualization environment.
 */
export declare enum CreateInstanceExportTaskResultExportTaskInstanceExportDetailsTargetEnvironmentEnum {
    Citrix = "citrix",
    Vmware = "vmware",
    Microsoft = "microsoft"
}
/**
 * Information about the instance to export.
 */
export declare class CreateInstanceExportTaskResultExportTaskInstanceExportDetails extends SpeakeasyBase {
    instanceId?: string;
    targetEnvironment?: CreateInstanceExportTaskResultExportTaskInstanceExportDetailsTargetEnvironmentEnum;
}
/**
 * The state of the export task.
 */
export declare enum CreateInstanceExportTaskResultExportTaskStateEnum {
    Active = "active",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a tag.
 */
export declare class CreateInstanceExportTaskResultExportTaskTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the export instance task.
 */
export declare class CreateInstanceExportTaskResultExportTask extends SpeakeasyBase {
    description?: string;
    exportTaskId?: string;
    exportToS3Task?: CreateInstanceExportTaskResultExportTaskExportToS3Task;
    instanceExportDetails?: CreateInstanceExportTaskResultExportTaskInstanceExportDetails;
    state?: CreateInstanceExportTaskResultExportTaskStateEnum;
    statusMessage?: string;
    tags?: CreateInstanceExportTaskResultExportTaskTags[];
}
/**
 * Success
 */
export declare class CreateInstanceExportTaskResult extends SpeakeasyBase {
    exportTask?: CreateInstanceExportTaskResultExportTask;
}
