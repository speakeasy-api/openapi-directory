import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountassignment as shared_accountassignment


@dataclass_json
@dataclasses.dataclass
class ListAccountAssignmentsResponse:
    account_assignments: Optional[list[shared_accountassignment.AccountAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAssignments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
