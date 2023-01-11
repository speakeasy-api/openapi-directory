import dataclasses
from typing import Optional
from ..shared import defaultclusterparameters as shared_defaultclusterparameters


@dataclasses.dataclass
class DescribeDefaultClusterParametersResult:
    default_cluster_parameters: Optional[shared_defaultclusterparameters.DefaultClusterParameters] = dataclasses.field(default=None)
    
