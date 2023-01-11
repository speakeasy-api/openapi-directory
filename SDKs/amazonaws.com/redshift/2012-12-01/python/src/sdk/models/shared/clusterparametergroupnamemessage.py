import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterParameterGroupNameMessage:
    r"""ClusterParameterGroupNameMessage
    <p/>
    """
    
    parameter_group_name: Optional[str] = dataclasses.field(default=None)
    parameter_group_status: Optional[str] = dataclasses.field(default=None)
    
