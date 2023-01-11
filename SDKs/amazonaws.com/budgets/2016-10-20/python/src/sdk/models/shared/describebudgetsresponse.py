import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budget as shared_budget


@dataclass_json
@dataclasses.dataclass
class DescribeBudgetsResponse:
    r"""DescribeBudgetsResponse
     Response of DescribeBudgets 
    """
    
    budgets: Optional[list[shared_budget.Budget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
