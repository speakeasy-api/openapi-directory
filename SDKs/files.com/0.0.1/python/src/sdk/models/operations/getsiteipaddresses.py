import dataclasses
from typing import Optional
from ..shared import ipaddressentity as shared_ipaddressentity


@dataclasses.dataclass
class GetSiteIPAddressesQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSiteIPAddressesRequest:
    query_params: GetSiteIPAddressesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSiteIPAddressesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_address_entities: Optional[list[shared_ipaddressentity.IPAddressEntity]] = dataclasses.field(default=None)
    
