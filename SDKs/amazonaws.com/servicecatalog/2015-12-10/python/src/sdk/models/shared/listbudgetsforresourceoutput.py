import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetdetail as shared_budgetdetail


@dataclass_json
@dataclasses.dataclass
class ListBudgetsForResourceOutput:
    budgets: Optional[list[shared_budgetdetail.BudgetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    
