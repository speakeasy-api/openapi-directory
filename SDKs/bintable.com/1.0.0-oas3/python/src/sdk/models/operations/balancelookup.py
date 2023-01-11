import dataclasses
from typing import Optional


@dataclasses.dataclass
class BalanceLookupQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BalanceLookupRequest:
    query_params: BalanceLookupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BalanceLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
