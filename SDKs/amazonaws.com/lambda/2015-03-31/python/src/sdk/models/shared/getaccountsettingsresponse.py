import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountlimit as shared_accountlimit
from ..shared import accountusage as shared_accountusage


@dataclass_json
@dataclasses.dataclass
class GetAccountSettingsResponse:
    account_limit: Optional[shared_accountlimit.AccountLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountLimit') }})
    account_usage: Optional[shared_accountusage.AccountUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountUsage') }})
    
