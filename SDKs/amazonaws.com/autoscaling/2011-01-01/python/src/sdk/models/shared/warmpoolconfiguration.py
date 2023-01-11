import dataclasses
from typing import Optional
from enum import Enum
from ..shared import warmpoolstate_enum as shared_warmpoolstate_enum
from ..shared import warmpoolstatus_enum as shared_warmpoolstatus_enum


@dataclasses.dataclass
class WarmPoolConfiguration:
    r"""WarmPoolConfiguration
    Describes a warm pool configuration. 
    """
    
    max_group_prepared_capacity: Optional[int] = dataclasses.field(default=None)
    min_size: Optional[int] = dataclasses.field(default=None)
    pool_state: Optional[shared_warmpoolstate_enum.WarmPoolStateEnum] = dataclasses.field(default=None)
    status: Optional[shared_warmpoolstatus_enum.WarmPoolStatusEnum] = dataclasses.field(default=None)
    
