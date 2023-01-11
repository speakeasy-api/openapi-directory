import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trailinfo as shared_trailinfo


@dataclass_json
@dataclasses.dataclass
class ListTrailsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    trails: Optional[list[shared_trailinfo.TrailInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trails') }})
    
