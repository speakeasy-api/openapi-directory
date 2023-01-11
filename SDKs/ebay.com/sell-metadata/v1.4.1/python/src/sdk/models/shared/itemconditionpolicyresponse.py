import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemconditionpolicy as shared_itemconditionpolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class ItemConditionPolicyResponse:
    item_condition_policies: Optional[list[shared_itemconditionpolicy.ItemConditionPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemConditionPolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
