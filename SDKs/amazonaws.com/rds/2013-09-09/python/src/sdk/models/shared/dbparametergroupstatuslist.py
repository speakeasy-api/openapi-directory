import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroupStatusList:
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    
