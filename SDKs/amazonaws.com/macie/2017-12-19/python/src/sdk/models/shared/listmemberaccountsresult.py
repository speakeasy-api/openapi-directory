import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberaccount as shared_memberaccount


@dataclass_json
@dataclasses.dataclass
class ListMemberAccountsResult:
    member_accounts: Optional[list[shared_memberaccount.MemberAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberAccounts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
