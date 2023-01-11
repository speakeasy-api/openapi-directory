import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroup:
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
