import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mitigationaction as shared_mitigationaction
from ..shared import detectmitigationactionstasktarget as shared_detectmitigationactionstasktarget
from ..shared import detectmitigationactionstaskstatistics as shared_detectmitigationactionstaskstatistics
from ..shared import detectmitigationactionstaskstatus_enum as shared_detectmitigationactionstaskstatus_enum
from ..shared import violationeventoccurrencerange as shared_violationeventoccurrencerange


@dataclass_json
@dataclasses.dataclass
class DetectMitigationActionsTaskSummary:
    r"""DetectMitigationActionsTaskSummary
     The summary of the mitigation action tasks. 
    """
    
    actions_definition: Optional[list[shared_mitigationaction.MitigationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsDefinition') }})
    only_active_violations_included: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyActiveViolationsIncluded') }})
    suppressed_alerts_included: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressedAlertsIncluded') }})
    target: Optional[shared_detectmitigationactionstasktarget.DetectMitigationActionsTaskTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task_end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[shared_detectmitigationactionstaskstatistics.DetectMitigationActionsTaskStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[shared_detectmitigationactionstaskstatus_enum.DetectMitigationActionsTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    violation_event_occurrence_range: Optional[shared_violationeventoccurrencerange.ViolationEventOccurrenceRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventOccurrenceRange') }})
    
