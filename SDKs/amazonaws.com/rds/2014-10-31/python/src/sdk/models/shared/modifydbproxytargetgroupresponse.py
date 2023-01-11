import dataclasses
from typing import Optional
from ..shared import dbproxytargetgroup as shared_dbproxytargetgroup


@dataclasses.dataclass
class ModifyDbProxyTargetGroupResponse:
    db_proxy_target_group: Optional[shared_dbproxytargetgroup.DbProxyTargetGroup] = dataclasses.field(default=None)
    
