import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class DescribeBudgetActionsForBudgetResponse:
    actions: list[shared_action.Action] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
