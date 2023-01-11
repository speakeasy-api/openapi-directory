import dataclasses
from typing import Optional
from ..shared import dbproxyendpoint as shared_dbproxyendpoint


@dataclasses.dataclass
class DeleteDbProxyEndpointResponse:
    db_proxy_endpoint: Optional[shared_dbproxyendpoint.DbProxyEndpoint] = dataclasses.field(default=None)
    
