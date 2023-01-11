import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetSecurityGroupsOutput:
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None)
    
