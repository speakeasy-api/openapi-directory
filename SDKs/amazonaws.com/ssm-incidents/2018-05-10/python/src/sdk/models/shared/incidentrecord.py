import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automationexecution as shared_automationexecution
from ..shared import chatchannel as shared_chatchannel
from ..shared import incidentrecordsource as shared_incidentrecordsource
from ..shared import notificationtargetitem as shared_notificationtargetitem
from ..shared import incidentrecordstatus_enum as shared_incidentrecordstatus_enum


@dataclass_json
@dataclasses.dataclass
class IncidentRecord:
    r"""IncidentRecord
    The record of the incident that's created when an incident occurs.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dedupe_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dedupeString') }})
    impact: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    incident_record_source: shared_incidentrecordsource.IncidentRecordSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordSource') }})
    last_modified_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedBy') }})
    last_modified_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: shared_incidentrecordstatus_enum.IncidentRecordStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    automation_executions: Optional[list[shared_automationexecution.AutomationExecution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automationExecutions') }})
    chat_channel: Optional[shared_chatchannel.ChatChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    notification_targets: Optional[list[shared_notificationtargetitem.NotificationTargetItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTargets') }})
    resolved_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
