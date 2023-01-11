import dataclasses
from typing import Optional
from ..shared import clusterversionlist as shared_clusterversionlist


@dataclasses.dataclass
class ClusterVersionsMessage:
    r"""ClusterVersionsMessage
    Contains the output from the <a>DescribeClusterVersions</a> action. 
    """
    
    cluster_versions: Optional[list[shared_clusterversionlist.ClusterVersionList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
