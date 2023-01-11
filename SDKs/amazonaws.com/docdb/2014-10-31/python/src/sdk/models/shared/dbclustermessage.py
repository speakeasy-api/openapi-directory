import dataclasses
from typing import Optional
from ..shared import dbclusterlist as shared_dbclusterlist


@dataclasses.dataclass
class DbClusterMessage:
    r"""DbClusterMessage
    Represents the output of <a>DescribeDBClusters</a>.
    """
    
    db_clusters: Optional[list[shared_dbclusterlist.DbClusterList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
