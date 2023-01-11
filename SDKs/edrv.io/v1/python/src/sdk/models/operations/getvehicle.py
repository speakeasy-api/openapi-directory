import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVehiclePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleQueryParams:
    include_driver: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_token: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVehicleRequest:
    path_params: GetVehiclePathParams = dataclasses.field()
    query_params: GetVehicleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
