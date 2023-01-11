import dataclasses
from typing import Optional
from ..shared import dbproxytargetgroup as shared_dbproxytargetgroup


@dataclasses.dataclass
class DescribeDbProxyTargetGroupsResponse:
    marker: Optional[str] = dataclasses.field(default=None)
    target_groups: Optional[list[shared_dbproxytargetgroup.DbProxyTargetGroup]] = dataclasses.field(default=None)
    
