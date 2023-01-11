import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetArrivalsByCrsPathParams:
    crs: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CRS', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArrivalsByCrsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    filter_station: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filterStation', 'style': 'form', 'explode': True }})
    num_services: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'numServices', 'style': 'form', 'explode': True }})
    service_details: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceDetails', 'style': 'form', 'explode': True }})
    time_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeOffset', 'style': 'form', 'explode': True }})
    time_window: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeWindow', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetArrivalsByCrsRequest:
    path_params: GetArrivalsByCrsPathParams = dataclasses.field()
    query_params: GetArrivalsByCrsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArrivalsByCrsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
