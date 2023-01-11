import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member as shared_member
from ..shared import result as shared_result


@dataclass_json
@dataclasses.dataclass
class GetMembersResponse:
    members: Optional[list[shared_member.Member]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    unprocessed_accounts: Optional[list[shared_result.Result]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedAccounts') }})
    
