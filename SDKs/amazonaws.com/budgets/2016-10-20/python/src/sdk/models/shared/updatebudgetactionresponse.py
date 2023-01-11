import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class UpdateBudgetActionResponse:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    new_action: shared_action.Action = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewAction') }})
    old_action: shared_action.Action = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OldAction') }})
    
