import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountassignmentoperationstatusmetadata as shared_accountassignmentoperationstatusmetadata


@dataclass_json
@dataclasses.dataclass
class ListAccountAssignmentDeletionStatusResponse:
    account_assignments_deletion_status: Optional[list[shared_accountassignmentoperationstatusmetadata.AccountAssignmentOperationStatusMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAssignmentsDeletionStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
