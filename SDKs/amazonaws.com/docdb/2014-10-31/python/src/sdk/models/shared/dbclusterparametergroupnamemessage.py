import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterParameterGroupNameMessage:
    r"""DbClusterParameterGroupNameMessage
    Contains the name of a cluster parameter group.
    """
    
    db_cluster_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    
