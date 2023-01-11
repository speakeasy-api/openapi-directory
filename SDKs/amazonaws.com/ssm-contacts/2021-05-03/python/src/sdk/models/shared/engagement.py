import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Engagement:
    r"""Engagement
    Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
    """
    
    contact_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    engagement_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngagementArn') }})
    sender: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    incident_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncidentId') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
