import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mitigationaction as shared_mitigationaction
from ..shared import auditmitigationactionstasktarget as shared_auditmitigationactionstasktarget
from ..shared import taskstatisticsforauditcheck as shared_taskstatisticsforauditcheck
from ..shared import auditmitigationactionstaskstatus_enum as shared_auditmitigationactionstaskstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeAuditMitigationActionsTaskResponse:
    actions_definition: Optional[list[shared_mitigationaction.MitigationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsDefinition') }})
    audit_check_to_actions_mapping: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToActionsMapping') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[shared_auditmitigationactionstasktarget.AuditMitigationActionsTaskTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task_statistics: Optional[dict[str, shared_taskstatisticsforauditcheck.TaskStatisticsForAuditCheck]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[shared_auditmitigationactionstaskstatus_enum.AuditMitigationActionsTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    
