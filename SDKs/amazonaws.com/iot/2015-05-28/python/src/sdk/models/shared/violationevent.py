import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behavior as shared_behavior
from ..shared import metricvalue as shared_metricvalue
from ..shared import violationeventadditionalinfo as shared_violationeventadditionalinfo
from ..shared import violationeventtype_enum as shared_violationeventtype_enum


@dataclass_json
@dataclasses.dataclass
class ViolationEvent:
    r"""ViolationEvent
    Information about a Device Defender security profile behavior violation.
    """
    
    behavior: Optional[shared_behavior.Behavior] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    metric_value: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    security_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    violation_event_additional_info: Optional[shared_violationeventadditionalinfo.ViolationEventAdditionalInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventAdditionalInfo') }})
    violation_event_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    violation_event_type: Optional[shared_violationeventtype_enum.ViolationEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventType') }})
    violation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationId') }})
    
