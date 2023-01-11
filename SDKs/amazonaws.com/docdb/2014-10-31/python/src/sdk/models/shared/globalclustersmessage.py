import dataclasses
from typing import Optional
from ..shared import globalclusterlist as shared_globalclusterlist


@dataclasses.dataclass
class GlobalClustersMessage:
    global_clusters: Optional[list[shared_globalclusterlist.GlobalClusterList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
