import dataclasses
from typing import Optional
from ..shared import listfailedipns as shared_listfailedipns


@dataclasses.dataclass
class ListFailedIPNsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFailedIPNsRequest:
    headers: ListFailedIPNsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ListFailedIPNsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_failed_ip_ns: Optional[shared_listfailedipns.ListFailedIPNs] = dataclasses.field(default=None)
    
