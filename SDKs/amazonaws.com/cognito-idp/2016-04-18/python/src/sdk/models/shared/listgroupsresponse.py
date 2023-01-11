import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grouptype as shared_grouptype


@dataclass_json
@dataclasses.dataclass
class ListGroupsResponse:
    groups: Optional[list[shared_grouptype.GroupType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
