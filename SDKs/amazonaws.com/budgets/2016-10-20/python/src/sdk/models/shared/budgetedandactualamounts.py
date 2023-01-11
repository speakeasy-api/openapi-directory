import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spend as shared_spend
from ..shared import timeperiod as shared_timeperiod


@dataclass_json
@dataclasses.dataclass
class BudgetedAndActualAmounts:
    r"""BudgetedAndActualAmounts
    The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
    """
    
    actual_amount: Optional[shared_spend.Spend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualAmount') }})
    budgeted_amount: Optional[shared_spend.Spend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetedAmount') }})
    time_period: Optional[shared_timeperiod.TimePeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimePeriod') }})
    
