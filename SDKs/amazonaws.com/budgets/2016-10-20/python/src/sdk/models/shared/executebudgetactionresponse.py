import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executiontype_enum as shared_executiontype_enum


@dataclass_json
@dataclasses.dataclass
class ExecuteBudgetActionResponse:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    execution_type: shared_executiontype_enum.ExecutionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionType') }})
    
