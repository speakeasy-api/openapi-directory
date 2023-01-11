import dataclasses
from typing import Optional
from ..shared import dbproxytarget as shared_dbproxytarget


@dataclasses.dataclass
class RegisterDbProxyTargetsResponse:
    db_proxy_targets: Optional[list[shared_dbproxytarget.DbProxyTarget]] = dataclasses.field(default=None)
    
