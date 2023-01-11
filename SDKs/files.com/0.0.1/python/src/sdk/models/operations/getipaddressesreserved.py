import dataclasses
from typing import Optional
from ..shared import publicipaddressentity as shared_publicipaddressentity


@dataclasses.dataclass
class GetIPAddressesReservedQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIPAddressesReservedRequest:
    query_params: GetIPAddressesReservedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIPAddressesReservedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_ip_address_entities: Optional[list[shared_publicipaddressentity.PublicIPAddressEntity]] = dataclasses.field(default=None)
    
