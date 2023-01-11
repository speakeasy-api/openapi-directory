import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group


@dataclass_json
@dataclasses.dataclass
class ListGroupsResponse:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
