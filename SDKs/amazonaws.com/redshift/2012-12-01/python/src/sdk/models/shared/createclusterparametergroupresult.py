import dataclasses
from typing import Optional
from ..shared import clusterparametergroup as shared_clusterparametergroup


@dataclasses.dataclass
class CreateClusterParameterGroupResult:
    cluster_parameter_group: Optional[shared_clusterparametergroup.ClusterParameterGroup] = dataclasses.field(default=None)
    
