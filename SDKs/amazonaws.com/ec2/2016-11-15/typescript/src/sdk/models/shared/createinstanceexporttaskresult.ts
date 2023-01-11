import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateInstanceExportTaskResultExportTaskExportToS3Task
/** 
 * Information about the export task.
**/
export class CreateInstanceExportTaskResultExportTaskExportToS3Task extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerFormat?: Record<string, any>;

  @SpeakeasyMetadata()
  diskImageFormat?: Record<string, any>;

  @SpeakeasyMetadata()
  s3Bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  s3Key?: Record<string, any>;
}


// CreateInstanceExportTaskResultExportTaskInstanceExportDetails
/** 
 * Information about the instance to export.
**/
export class CreateInstanceExportTaskResultExportTaskInstanceExportDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  targetEnvironment?: Record<string, any>;
}


// CreateInstanceExportTaskResultExportTask
/** 
 * Information about the export instance task.
**/
export class CreateInstanceExportTaskResultExportTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  exportTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  exportToS3Task?: CreateInstanceExportTaskResultExportTaskExportToS3Task;

  @SpeakeasyMetadata()
  instanceExportDetails?: CreateInstanceExportTaskResultExportTaskInstanceExportDetails;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateInstanceExportTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exportTask?: CreateInstanceExportTaskResultExportTask;
}
