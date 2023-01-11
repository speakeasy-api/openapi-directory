import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitylistitem as shared_activitylistitem


@dataclass_json
@dataclasses.dataclass
class ListActivitiesOutput:
    activities: list[shared_activitylistitem.ActivityListItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
