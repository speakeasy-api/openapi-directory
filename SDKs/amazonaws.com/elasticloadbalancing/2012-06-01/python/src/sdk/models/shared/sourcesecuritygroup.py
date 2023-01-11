import dataclasses
from typing import Optional


@dataclasses.dataclass
class SourceSecurityGroup:
    r"""SourceSecurityGroup
    Information about a source security group.
    """
    
    group_name: Optional[str] = dataclasses.field(default=None)
    owner_alias: Optional[str] = dataclasses.field(default=None)
    
