import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteBudgetRequest:
    r"""DeleteBudgetRequest
     Request of DeleteBudget 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    
