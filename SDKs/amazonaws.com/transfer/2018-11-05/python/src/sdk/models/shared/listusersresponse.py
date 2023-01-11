import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listeduser as shared_listeduser


@dataclass_json
@dataclasses.dataclass
class ListUsersResponse:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    users: list[shared_listeduser.ListedUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
