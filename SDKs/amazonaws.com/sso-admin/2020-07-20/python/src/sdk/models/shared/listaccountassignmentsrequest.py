import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListAccountAssignmentsRequest:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
