import dataclasses
from typing import Optional
from ..shared import dbproxyendpoint as shared_dbproxyendpoint


@dataclasses.dataclass
class DescribeDbProxyEndpointsResponse:
    db_proxy_endpoints: Optional[list[shared_dbproxyendpoint.DbProxyEndpoint]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
