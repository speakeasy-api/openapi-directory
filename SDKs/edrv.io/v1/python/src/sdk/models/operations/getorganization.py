import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOrganizationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationQueryParams:
    include_locations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_locations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationRequest:
    path_params: GetOrganizationPathParams = dataclasses.field()
    query_params: GetOrganizationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
