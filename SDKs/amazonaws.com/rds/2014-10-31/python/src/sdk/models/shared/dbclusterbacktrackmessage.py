import dataclasses
from typing import Optional
from ..shared import dbclusterbacktracklist as shared_dbclusterbacktracklist


@dataclasses.dataclass
class DbClusterBacktrackMessage:
    r"""DbClusterBacktrackMessage
    Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
    """
    
    db_cluster_backtracks: Optional[list[shared_dbclusterbacktracklist.DbClusterBacktrackList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
