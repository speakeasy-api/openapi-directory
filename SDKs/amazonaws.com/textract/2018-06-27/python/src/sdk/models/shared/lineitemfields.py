import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expensefield as shared_expensefield


@dataclass_json
@dataclasses.dataclass
class LineItemFields:
    r"""LineItemFields
    A structure that holds information about the different lines found in a document's tables.
    """
    
    line_item_expense_fields: Optional[list[shared_expensefield.ExpenseField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemExpenseFields') }})
    
