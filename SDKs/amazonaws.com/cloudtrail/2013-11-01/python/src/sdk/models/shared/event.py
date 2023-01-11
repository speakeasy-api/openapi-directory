import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class Event:
    r"""Event
    Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
    """
    
    access_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKeyId') }})
    cloud_trail_event: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudTrailEvent') }})
    event_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventId') }})
    event_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventName') }})
    event_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    event_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read_only: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadOnly') }})
    resources: Optional[list[shared_resource.Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
