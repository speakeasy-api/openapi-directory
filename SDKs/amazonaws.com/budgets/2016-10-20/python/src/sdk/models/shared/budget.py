import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spend as shared_spend
from ..shared import budgettype_enum as shared_budgettype_enum
from ..shared import calculatedspend as shared_calculatedspend
from ..shared import costtypes as shared_costtypes
from ..shared import timeperiod as shared_timeperiod
from ..shared import timeunit_enum as shared_timeunit_enum


@dataclass_json
@dataclasses.dataclass
class Budget:
    r"""Budget
    <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
    """
    
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    budget_type: shared_budgettype_enum.BudgetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetType') }})
    time_unit: shared_timeunit_enum.TimeUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    budget_limit: Optional[shared_spend.Spend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetLimit') }})
    calculated_spend: Optional[shared_calculatedspend.CalculatedSpend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculatedSpend') }})
    cost_filters: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostFilters') }})
    cost_types: Optional[shared_costtypes.CostTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostTypes') }})
    last_updated_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_budget_limits: Optional[dict[str, shared_spend.Spend]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlannedBudgetLimits') }})
    time_period: Optional[shared_timeperiod.TimePeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimePeriod') }})
    
