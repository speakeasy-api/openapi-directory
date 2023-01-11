import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalstate_enum as shared_approvalstate_enum


@dataclass_json
@dataclasses.dataclass
class Approval:
    r"""Approval
    Returns information about a specific approval on a pull request.
    """
    
    approval_state: Optional[shared_approvalstate_enum.ApprovalStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalState') }})
    user_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    
