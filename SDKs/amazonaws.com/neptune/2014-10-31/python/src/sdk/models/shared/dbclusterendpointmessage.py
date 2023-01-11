import dataclasses
from typing import Optional
from ..shared import dbclusterendpointlist as shared_dbclusterendpointlist


@dataclasses.dataclass
class DbClusterEndpointMessage:
    db_cluster_endpoints: Optional[list[shared_dbclusterendpointlist.DbClusterEndpointList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
