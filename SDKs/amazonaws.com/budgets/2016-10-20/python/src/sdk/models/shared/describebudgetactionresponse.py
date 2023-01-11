import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class DescribeBudgetActionResponse:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action: shared_action.Action = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    
