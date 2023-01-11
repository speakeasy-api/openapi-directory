import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class NetworkQueryParams:
    alt: int = dataclasses.field(metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lon: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    nam: str = dataclasses.field(metadata={'query_param': { 'field_name': 'nam', 'style': 'form', 'explode': True }})
    net: str = dataclasses.field(metadata={'query_param': { 'field_name': 'net', 'style': 'form', 'explode': True }})
    rxg: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rxg', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class NetworkSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class NetworkRequest:
    query_params: NetworkQueryParams = dataclasses.field()
    security: NetworkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class NetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
