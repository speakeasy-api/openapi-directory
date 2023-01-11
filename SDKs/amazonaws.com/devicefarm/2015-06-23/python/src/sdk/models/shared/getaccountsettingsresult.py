import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountsettings as shared_accountsettings


@dataclass_json
@dataclasses.dataclass
class GetAccountSettingsResult:
    r"""GetAccountSettingsResult
    Represents the account settings return values from the <code>GetAccountSettings</code> request.
    """
    
    account_settings: Optional[shared_accountsettings.AccountSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSettings') }})
    
