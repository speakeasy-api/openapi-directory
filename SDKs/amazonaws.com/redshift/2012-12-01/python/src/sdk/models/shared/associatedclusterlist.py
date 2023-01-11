import dataclasses
from typing import Optional
from enum import Enum
from ..shared import schedulestate_enum as shared_schedulestate_enum


@dataclasses.dataclass
class AssociatedClusterList:
    r"""AssociatedClusterList
    <p/>
    """
    
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    schedule_association_state: Optional[shared_schedulestate_enum.ScheduleStateEnum] = dataclasses.field(default=None)
    
