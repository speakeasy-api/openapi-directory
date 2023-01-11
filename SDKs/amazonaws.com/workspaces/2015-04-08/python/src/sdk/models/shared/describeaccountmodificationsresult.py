import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountmodification as shared_accountmodification


@dataclass_json
@dataclasses.dataclass
class DescribeAccountModificationsResult:
    account_modifications: Optional[list[shared_accountmodification.AccountModification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountModifications') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
