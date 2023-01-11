import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountsynchronization as shared_accountsynchronization


@dataclass_json
@dataclasses.dataclass
class AccountSynchronizationList:
    account_synchronizations: Optional[list[shared_accountsynchronization.AccountSynchronization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSynchronizations') }})
    
