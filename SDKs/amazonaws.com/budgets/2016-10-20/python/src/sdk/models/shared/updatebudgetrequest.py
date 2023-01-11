import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budget as shared_budget


@dataclass_json
@dataclasses.dataclass
class UpdateBudgetRequest:
    r"""UpdateBudgetRequest
     Request of UpdateBudget 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    new_budget: shared_budget.Budget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewBudget') }})
    
