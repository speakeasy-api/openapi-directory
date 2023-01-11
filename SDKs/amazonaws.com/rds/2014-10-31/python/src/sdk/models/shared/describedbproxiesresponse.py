import dataclasses
from typing import Optional
from ..shared import dbproxy as shared_dbproxy


@dataclasses.dataclass
class DescribeDbProxiesResponse:
    db_proxies: Optional[list[shared_dbproxy.DbProxy]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
