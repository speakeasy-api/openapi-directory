import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChargeStationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChargeStationQueryParams:
    include_evses: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_evses', 'style': 'form', 'explode': True }})
    include_location: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_location', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargeStationRequest:
    path_params: GetChargeStationPathParams = dataclasses.field()
    query_params: GetChargeStationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChargeStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
