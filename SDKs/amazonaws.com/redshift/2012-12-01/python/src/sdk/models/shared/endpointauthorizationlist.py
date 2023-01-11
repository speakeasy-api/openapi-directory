import dataclasses
from typing import Optional
from ..shared import endpointauthorization as shared_endpointauthorization


@dataclasses.dataclass
class EndpointAuthorizationList:
    endpoint_authorization_list: Optional[list[shared_endpointauthorization.EndpointAuthorization]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
