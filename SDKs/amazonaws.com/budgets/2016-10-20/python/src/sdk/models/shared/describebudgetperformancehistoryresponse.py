import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetperformancehistory as shared_budgetperformancehistory


@dataclass_json
@dataclasses.dataclass
class DescribeBudgetPerformanceHistoryResponse:
    budget_performance_history: Optional[shared_budgetperformancehistory.BudgetPerformanceHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetPerformanceHistory') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
