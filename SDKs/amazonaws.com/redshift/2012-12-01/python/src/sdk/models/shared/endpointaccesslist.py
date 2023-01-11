import dataclasses
from typing import Optional
from ..shared import endpointaccess as shared_endpointaccess


@dataclasses.dataclass
class EndpointAccessList:
    endpoint_access_list: Optional[list[shared_endpointaccess.EndpointAccess]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
