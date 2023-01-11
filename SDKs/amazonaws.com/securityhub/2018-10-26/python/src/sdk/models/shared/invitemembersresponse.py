import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import result as shared_result


@dataclass_json
@dataclasses.dataclass
class InviteMembersResponse:
    unprocessed_accounts: Optional[list[shared_result.Result]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedAccounts') }})
    
