import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the export task.
**/
export declare class CreateInstanceExportTaskResultExportTaskExportToS3Task extends SpeakeasyBase {
    containerFormat?: Record<string, any>;
    diskImageFormat?: Record<string, any>;
    s3Bucket?: Record<string, any>;
    s3Key?: Record<string, any>;
}
/**
 * Information about the instance to export.
**/
export declare class CreateInstanceExportTaskResultExportTaskInstanceExportDetails extends SpeakeasyBase {
    instanceId?: Record<string, any>;
    targetEnvironment?: Record<string, any>;
}
/**
 * Information about the export instance task.
**/
export declare class CreateInstanceExportTaskResultExportTask extends SpeakeasyBase {
    description?: Record<string, any>;
    exportTaskId?: Record<string, any>;
    exportToS3Task?: CreateInstanceExportTaskResultExportTaskExportToS3Task;
    instanceExportDetails?: CreateInstanceExportTaskResultExportTaskInstanceExportDetails;
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateInstanceExportTaskResult extends SpeakeasyBase {
    exportTask?: CreateInstanceExportTaskResultExportTask;
}
