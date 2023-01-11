import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraints as shared_constraints
from ..shared import playercontext as shared_playercontext
from ..shared import queueactivityreportevent_enum as shared_queueactivityreportevent_enum
from ..shared import useractivity as shared_useractivity


@dataclass_json
@dataclasses.dataclass
class UpdateActivityRequest:
    report: shared_queueactivityreportevent_enum.QueueActivityReportEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_activity: shared_useractivity.UserActivity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActivity') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    constraints: Optional[shared_constraints.Constraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    now_playing: Optional[shared_playercontext.PlayerContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nowPlaying') }})
    previously_playing: Optional[shared_playercontext.PlayerContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previouslyPlaying') }})
    
