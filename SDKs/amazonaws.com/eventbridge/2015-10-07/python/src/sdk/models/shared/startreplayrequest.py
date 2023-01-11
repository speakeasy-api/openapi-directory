import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replaydestination as shared_replaydestination


@dataclass_json
@dataclasses.dataclass
class StartReplayRequest:
    destination: shared_replaydestination.ReplayDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    event_end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventEndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    event_start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replay_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplayName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
