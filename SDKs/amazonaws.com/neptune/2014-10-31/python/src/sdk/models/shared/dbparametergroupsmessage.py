import dataclasses
from typing import Optional
from ..shared import dbparametergrouplist as shared_dbparametergrouplist


@dataclasses.dataclass
class DbParameterGroupsMessage:
    db_parameter_groups: Optional[list[shared_dbparametergrouplist.DbParameterGroupList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
