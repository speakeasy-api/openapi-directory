import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitemgroup as shared_lineitemgroup
from ..shared import expensefield as shared_expensefield


@dataclass_json
@dataclasses.dataclass
class ExpenseDocument:
    r"""ExpenseDocument
    The structure holding all the information returned by AnalyzeExpense
    """
    
    expense_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpenseIndex') }})
    line_item_groups: Optional[list[shared_lineitemgroup.LineItemGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemGroups') }})
    summary_fields: Optional[list[shared_expensefield.ExpenseField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryFields') }})
    
