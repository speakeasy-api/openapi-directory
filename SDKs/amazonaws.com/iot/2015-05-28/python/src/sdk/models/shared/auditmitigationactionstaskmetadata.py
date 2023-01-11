import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditmitigationactionstaskstatus_enum as shared_auditmitigationactionstaskstatus_enum


@dataclass_json
@dataclasses.dataclass
class AuditMitigationActionsTaskMetadata:
    r"""AuditMitigationActionsTaskMetadata
    Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
    """
    
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: Optional[shared_auditmitigationactionstaskstatus_enum.AuditMitigationActionsTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    
