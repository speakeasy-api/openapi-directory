import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroupNameMessage:
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    
