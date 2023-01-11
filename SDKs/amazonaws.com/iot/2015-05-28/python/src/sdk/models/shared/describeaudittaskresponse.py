import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditcheckdetails as shared_auditcheckdetails
from ..shared import taskstatistics as shared_taskstatistics
from ..shared import audittaskstatus_enum as shared_audittaskstatus_enum
from ..shared import audittasktype_enum as shared_audittasktype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeAuditTaskResponse:
    audit_details: Optional[dict[str, shared_auditcheckdetails.AuditCheckDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditDetails') }})
    scheduled_audit_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledAuditName') }})
    task_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[shared_taskstatistics.TaskStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[shared_audittaskstatus_enum.AuditTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    task_type: Optional[shared_audittasktype_enum.AuditTaskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
