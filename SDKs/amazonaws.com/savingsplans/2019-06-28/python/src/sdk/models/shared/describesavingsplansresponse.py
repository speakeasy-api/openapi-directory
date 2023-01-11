import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savingsplan as shared_savingsplan


@dataclass_json
@dataclasses.dataclass
class DescribeSavingsPlansResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    savings_plans: Optional[list[shared_savingsplan.SavingsPlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlans') }})
    
