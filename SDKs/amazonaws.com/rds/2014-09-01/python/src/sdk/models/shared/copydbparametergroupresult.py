import dataclasses
from typing import Optional
from ..shared import dbparametergroup as shared_dbparametergroup


@dataclasses.dataclass
class CopyDbParameterGroupResult:
    db_parameter_group: Optional[shared_dbparametergroup.DbParameterGroup] = dataclasses.field(default=None)
    
