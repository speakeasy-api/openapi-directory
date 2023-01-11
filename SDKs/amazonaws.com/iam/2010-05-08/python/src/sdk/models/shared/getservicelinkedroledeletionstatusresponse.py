import dataclasses
from typing import Optional
from enum import Enum
from ..shared import deletiontaskfailurereasontype as shared_deletiontaskfailurereasontype
from ..shared import deletiontaskstatustype_enum as shared_deletiontaskstatustype_enum


@dataclasses.dataclass
class GetServiceLinkedRoleDeletionStatusResponse:
    status: shared_deletiontaskstatustype_enum.DeletionTaskStatusTypeEnum = dataclasses.field()
    reason: Optional[shared_deletiontaskfailurereasontype.DeletionTaskFailureReasonType] = dataclasses.field(default=None)
    
