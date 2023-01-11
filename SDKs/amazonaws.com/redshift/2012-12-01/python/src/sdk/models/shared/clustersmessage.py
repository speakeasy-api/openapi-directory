import dataclasses
from typing import Optional
from ..shared import clusterlist as shared_clusterlist


@dataclasses.dataclass
class ClustersMessage:
    r"""ClustersMessage
    Contains the output from the <a>DescribeClusters</a> action. 
    """
    
    clusters: Optional[list[shared_clusterlist.ClusterList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
