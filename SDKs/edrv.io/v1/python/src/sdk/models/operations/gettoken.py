import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTokenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTokenQueryParams:
    include_driver: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTokenRequest:
    path_params: GetTokenPathParams = dataclasses.field()
    query_params: GetTokenQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
