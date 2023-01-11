import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupnameandarn as shared_groupnameandarn


@dataclass_json
@dataclasses.dataclass
class ListThingGroupsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    thing_groups: Optional[list[shared_groupnameandarn.GroupNameAndArn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroups') }})
    
