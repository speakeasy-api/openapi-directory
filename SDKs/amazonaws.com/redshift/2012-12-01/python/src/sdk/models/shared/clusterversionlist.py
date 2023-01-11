import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterVersionList:
    r"""ClusterVersionList
    Describes a cluster version, including the parameter group family and description of the version.
    """
    
    cluster_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    cluster_version: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
