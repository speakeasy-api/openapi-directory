import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import robot as shared_robot


@dataclass_json
@dataclasses.dataclass
class ListRobotsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    robots: Optional[list[shared_robot.Robot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robots') }})
    
