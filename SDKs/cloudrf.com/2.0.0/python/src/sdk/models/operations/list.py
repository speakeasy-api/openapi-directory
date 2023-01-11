import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListQueryParams:
    e: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'e', 'style': 'form', 'explode': True }})
    n: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'n', 'style': 'form', 'explode': True }})
    s: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    w: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'w', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListRequest:
    query_params: ListQueryParams = dataclasses.field()
    security: ListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
