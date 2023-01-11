import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expensedetection as shared_expensedetection
from ..shared import expensetype as shared_expensetype


@dataclass_json
@dataclasses.dataclass
class ExpenseField:
    r"""ExpenseField
    Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
    """
    
    label_detection: Optional[shared_expensedetection.ExpenseDetection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelDetection') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    type: Optional[shared_expensetype.ExpenseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value_detection: Optional[shared_expensedetection.ExpenseDetection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDetection') }})
    
