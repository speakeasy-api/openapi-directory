import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgettype_enum as shared_budgettype_enum
from ..shared import budgetedandactualamounts as shared_budgetedandactualamounts
from ..shared import costtypes as shared_costtypes
from ..shared import timeunit_enum as shared_timeunit_enum


@dataclass_json
@dataclasses.dataclass
class BudgetPerformanceHistory:
    r"""BudgetPerformanceHistory
    A history of the state of a budget at the end of the budget's specified time period.
    """
    
    budget_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    budget_type: Optional[shared_budgettype_enum.BudgetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetType') }})
    budgeted_and_actual_amounts_list: Optional[list[shared_budgetedandactualamounts.BudgetedAndActualAmounts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetedAndActualAmountsList') }})
    cost_filters: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostFilters') }})
    cost_types: Optional[shared_costtypes.CostTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostTypes') }})
    time_unit: Optional[shared_timeunit_enum.TimeUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    
