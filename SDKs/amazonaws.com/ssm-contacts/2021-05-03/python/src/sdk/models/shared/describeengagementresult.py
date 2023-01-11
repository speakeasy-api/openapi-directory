import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeEngagementResult:
    contact_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    engagement_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngagementArn') }})
    sender: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    incident_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncidentId') }})
    public_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicContent') }})
    public_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicSubject') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
