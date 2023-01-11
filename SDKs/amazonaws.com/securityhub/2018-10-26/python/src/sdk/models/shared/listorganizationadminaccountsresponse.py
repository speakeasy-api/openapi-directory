import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adminaccount as shared_adminaccount


@dataclass_json
@dataclasses.dataclass
class ListOrganizationAdminAccountsResponse:
    admin_accounts: Optional[list[shared_adminaccount.AdminAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminAccounts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
