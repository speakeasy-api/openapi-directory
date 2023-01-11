import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scoretrackstate_enum as shared_scoretrackstate_enum
from ..shared import scoretrackpoint as shared_scoretrackpoint


@dataclass_json
@dataclasses.dataclass
class ScoreTrackUpdate:
    r"""ScoreTrackUpdate
    Update an existing track.
    
    """
    
    default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    state: Optional[shared_scoretrackstate_enum.ScoreTrackStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    synchronization_points: Optional[list[shared_scoretrackpoint.ScoreTrackPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronizationPoints') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
