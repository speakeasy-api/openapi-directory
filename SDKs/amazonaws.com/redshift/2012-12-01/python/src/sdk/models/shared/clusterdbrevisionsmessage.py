import dataclasses
from typing import Optional
from ..shared import clusterdbrevisionslist as shared_clusterdbrevisionslist


@dataclasses.dataclass
class ClusterDbRevisionsMessage:
    cluster_db_revisions: Optional[list[shared_clusterdbrevisionslist.ClusterDbRevisionsList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
