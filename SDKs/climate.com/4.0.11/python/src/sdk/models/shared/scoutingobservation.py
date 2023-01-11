import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scoutingtag as shared_scoutingtag

class ScoutingObservationLocationDisplayColorEnum(str, Enum):
    NUMBER_307AF7 = "#307af7"
    NUMBER_38D753 = "#38d753"
    NUMBER_B037E4 = "#b037e4"
    NUMBER_EF3E3E = "#ef3e3e"
    NUMBER_F7EC41 = "#f7ec41"
    NUMBER_FF8439 = "#ff8439"
    NUMBER_808080 = "#808080"

class ScoutingObservationStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

class ScoutingObservationTimespanEnum(str, Enum):
    PERMANENT = "PERMANENT"
    SEASONAL = "SEASONAL"


@dataclass_json
@dataclasses.dataclass
class ScoutingObservation:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    field_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldIds') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_display_color: ScoutingObservationLocationDisplayColorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationDisplayColor') }})
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: ScoutingObservationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: list[shared_scoutingtag.ScoutingTag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timespan: ScoutingObservationTimespanEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timespan') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
