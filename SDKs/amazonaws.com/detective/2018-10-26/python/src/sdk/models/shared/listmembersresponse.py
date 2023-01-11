import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberdetail as shared_memberdetail


@dataclass_json
@dataclasses.dataclass
class ListMembersResponse:
    member_details: Optional[list[shared_memberdetail.MemberDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
