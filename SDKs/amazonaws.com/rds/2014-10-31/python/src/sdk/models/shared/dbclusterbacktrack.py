import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class DbClusterBacktrack:
    r"""DbClusterBacktrack
    This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
    """
    
    backtrack_identifier: Optional[str] = dataclasses.field(default=None)
    backtrack_request_creation_time: Optional[datetime] = dataclasses.field(default=None)
    backtrack_to: Optional[datetime] = dataclasses.field(default=None)
    backtracked_from: Optional[datetime] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
