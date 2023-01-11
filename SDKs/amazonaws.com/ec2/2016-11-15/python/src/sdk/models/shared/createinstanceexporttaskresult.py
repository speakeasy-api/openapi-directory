import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateInstanceExportTaskResultExportTaskExportToS3Task:
    r"""CreateInstanceExportTaskResultExportTaskExportToS3Task
    Information about the export task.
    """
    
    container_format: Optional[dict[str, Any]] = dataclasses.field(default=None)
    disk_image_format: Optional[dict[str, Any]] = dataclasses.field(default=None)
    s3_bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    s3_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInstanceExportTaskResultExportTaskInstanceExportDetails:
    r"""CreateInstanceExportTaskResultExportTaskInstanceExportDetails
    Information about the instance to export.
    """
    
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_environment: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInstanceExportTaskResultExportTask:
    r"""CreateInstanceExportTaskResultExportTask
    Information about the export instance task.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    export_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    export_to_s3_task: Optional[CreateInstanceExportTaskResultExportTaskExportToS3Task] = dataclasses.field(default=None)
    instance_export_details: Optional[CreateInstanceExportTaskResultExportTaskInstanceExportDetails] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInstanceExportTaskResult:
    export_task: Optional[CreateInstanceExportTaskResultExportTask] = dataclasses.field(default=None)
    
