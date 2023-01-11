import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionGroupMembership:
    option_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
