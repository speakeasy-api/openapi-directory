import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usertype as shared_usertype


@dataclass_json
@dataclasses.dataclass
class ListUsersInGroupResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    users: Optional[list[shared_usertype.UserType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    
