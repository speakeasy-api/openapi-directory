import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ExportTask:
    r"""ExportTask
    <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
    """
    
    export_only: Optional[list[str]] = dataclasses.field(default=None)
    export_task_identifier: Optional[str] = dataclasses.field(default=None)
    failure_cause: Optional[str] = dataclasses.field(default=None)
    iam_role_arn: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    percent_progress: Optional[int] = dataclasses.field(default=None)
    s3_bucket: Optional[str] = dataclasses.field(default=None)
    s3_prefix: Optional[str] = dataclasses.field(default=None)
    snapshot_time: Optional[datetime] = dataclasses.field(default=None)
    source_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    task_end_time: Optional[datetime] = dataclasses.field(default=None)
    task_start_time: Optional[datetime] = dataclasses.field(default=None)
    total_extracted_data_in_gb: Optional[int] = dataclasses.field(default=None)
    warning_message: Optional[str] = dataclasses.field(default=None)
    
