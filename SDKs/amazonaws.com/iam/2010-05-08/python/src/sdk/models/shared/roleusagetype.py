import dataclasses
from typing import Optional


@dataclasses.dataclass
class RoleUsageType:
    r"""RoleUsageType
    <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
    """
    
    region: Optional[str] = dataclasses.field(default=None)
    resources: Optional[list[str]] = dataclasses.field(default=None)
    
