import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalstate_enum as shared_approvalstate_enum


@dataclass_json
@dataclasses.dataclass
class ApprovalStateChangedEventMetadata:
    r"""ApprovalStateChangedEventMetadata
    Returns information about a change in the approval state for a pull request.
    """
    
    approval_status: Optional[shared_approvalstate_enum.ApprovalStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStatus') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
