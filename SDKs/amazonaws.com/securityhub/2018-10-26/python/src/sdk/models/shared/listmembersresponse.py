import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member as shared_member


@dataclass_json
@dataclasses.dataclass
class ListMembersResponse:
    members: Optional[list[shared_member.Member]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
