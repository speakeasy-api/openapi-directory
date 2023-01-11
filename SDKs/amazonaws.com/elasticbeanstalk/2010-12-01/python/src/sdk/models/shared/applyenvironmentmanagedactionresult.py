import dataclasses
from typing import Optional
from enum import Enum
from ..shared import actiontype_enum as shared_actiontype_enum


@dataclasses.dataclass
class ApplyEnvironmentManagedActionResult:
    r"""ApplyEnvironmentManagedActionResult
    The result message containing information about the managed action.
    """
    
    action_description: Optional[str] = dataclasses.field(default=None)
    action_id: Optional[str] = dataclasses.field(default=None)
    action_type: Optional[shared_actiontype_enum.ActionTypeEnum] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
