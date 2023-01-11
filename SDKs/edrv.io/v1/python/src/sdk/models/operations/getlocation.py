import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetLocationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationQueryParams:
    include_chargestations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_chargestations', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLocationRequest:
    path_params: GetLocationPathParams = dataclasses.field()
    query_params: GetLocationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
