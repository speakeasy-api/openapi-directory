import dataclasses
from typing import Optional
from enum import Enum
from ..shared import targethealthreason_enum as shared_targethealthreason_enum
from ..shared import targetstate_enum as shared_targetstate_enum


@dataclasses.dataclass
class TargetHealth:
    r"""TargetHealth
    Information about the connection health of an RDS Proxy target.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    reason: Optional[shared_targethealthreason_enum.TargetHealthReasonEnum] = dataclasses.field(default=None)
    state: Optional[shared_targetstate_enum.TargetStateEnum] = dataclasses.field(default=None)
    
