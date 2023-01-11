import dataclasses
from typing import Optional
from ..shared import clusterparameterstatus as shared_clusterparameterstatus


@dataclasses.dataclass
class ClusterParameterGroupStatusList:
    r"""ClusterParameterGroupStatusList
    Describes the status of a parameter group.
    """
    
    cluster_parameter_status_list: Optional[list[shared_clusterparameterstatus.ClusterParameterStatus]] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    parameter_group_name: Optional[str] = dataclasses.field(default=None)
    
