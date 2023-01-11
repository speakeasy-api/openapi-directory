import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterParameterGroupNameMessage:
    r"""DbClusterParameterGroupNameMessage
    <p/>
    """
    
    db_cluster_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    
