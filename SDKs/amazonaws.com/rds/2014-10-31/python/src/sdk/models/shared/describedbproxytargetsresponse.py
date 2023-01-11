import dataclasses
from typing import Optional
from ..shared import dbproxytarget as shared_dbproxytarget


@dataclasses.dataclass
class DescribeDbProxyTargetsResponse:
    marker: Optional[str] = dataclasses.field(default=None)
    targets: Optional[list[shared_dbproxytarget.DbProxyTarget]] = dataclasses.field(default=None)
    
