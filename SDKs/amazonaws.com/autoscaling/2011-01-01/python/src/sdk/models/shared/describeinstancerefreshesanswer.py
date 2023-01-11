import dataclasses
from typing import Optional
from ..shared import instancerefresh as shared_instancerefresh


@dataclasses.dataclass
class DescribeInstanceRefreshesAnswer:
    instance_refreshes: Optional[list[shared_instancerefresh.InstanceRefresh]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
