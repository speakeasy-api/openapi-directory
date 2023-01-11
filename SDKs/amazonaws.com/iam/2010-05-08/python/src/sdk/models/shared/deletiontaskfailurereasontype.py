import dataclasses
from typing import Optional
from ..shared import roleusagetype as shared_roleusagetype


@dataclasses.dataclass
class DeletionTaskFailureReasonType:
    r"""DeletionTaskFailureReasonType
    <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
    """
    
    reason: Optional[str] = dataclasses.field(default=None)
    role_usage_list: Optional[list[shared_roleusagetype.RoleUsageType]] = dataclasses.field(default=None)
    
