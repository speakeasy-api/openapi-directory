import dataclasses
from typing import Optional
from enum import Enum
from ..shared import targethealthreasonenum_enum as shared_targethealthreasonenum_enum
from ..shared import targethealthstateenum_enum as shared_targethealthstateenum_enum


@dataclasses.dataclass
class TargetHealth:
    r"""TargetHealth
    Information about the current health of a target.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    reason: Optional[shared_targethealthreasonenum_enum.TargetHealthReasonEnumEnum] = dataclasses.field(default=None)
    state: Optional[shared_targethealthstateenum_enum.TargetHealthStateEnumEnum] = dataclasses.field(default=None)
    
