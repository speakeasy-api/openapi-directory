import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalstatus_enum as shared_approvalstatus_enum


@dataclass_json
@dataclasses.dataclass
class ApprovalResult:
    r"""ApprovalResult
    Represents information about the result of an approval request.
    """
    
    status: shared_approvalstatus_enum.ApprovalStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
