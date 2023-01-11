import dataclasses
from typing import Optional
from ..shared import dbclusterparametergrouplist as shared_dbclusterparametergrouplist


@dataclasses.dataclass
class DbClusterParameterGroupsMessage:
    db_cluster_parameter_groups: Optional[list[shared_dbclusterparametergrouplist.DbClusterParameterGroupList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
