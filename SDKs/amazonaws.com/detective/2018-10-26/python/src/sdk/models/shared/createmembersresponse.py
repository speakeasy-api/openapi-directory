import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberdetail as shared_memberdetail
from ..shared import unprocessedaccount as shared_unprocessedaccount


@dataclass_json
@dataclasses.dataclass
class CreateMembersResponse:
    members: Optional[list[shared_memberdetail.MemberDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    unprocessed_accounts: Optional[list[shared_unprocessedaccount.UnprocessedAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedAccounts') }})
    
