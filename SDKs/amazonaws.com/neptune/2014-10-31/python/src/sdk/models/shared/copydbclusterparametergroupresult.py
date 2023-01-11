import dataclasses
from typing import Optional
from ..shared import dbclusterparametergroup as shared_dbclusterparametergroup


@dataclasses.dataclass
class CopyDbClusterParameterGroupResult:
    db_cluster_parameter_group: Optional[shared_dbclusterparametergroup.DbClusterParameterGroup] = dataclasses.field(default=None)
    
