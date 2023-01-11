import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChargeStationConnectorsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChargeStationConnectorsQueryParams:
    include_evse: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargeStationConnectorsRequest:
    path_params: GetChargeStationConnectorsPathParams = dataclasses.field()
    query_params: GetChargeStationConnectorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChargeStationConnectorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
