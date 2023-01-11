import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetKeyQueryParams:
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetKeyRequest:
    query_params: GetKeyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
