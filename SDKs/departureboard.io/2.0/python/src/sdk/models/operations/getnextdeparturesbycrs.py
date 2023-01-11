import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetNextDeparturesByCrsPathParams:
    crs: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CRS', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNextDeparturesByCrsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    filter_list: str = dataclasses.field(metadata={'query_param': { 'field_name': 'filterList', 'style': 'form', 'explode': True }})
    service_details: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceDetails', 'style': 'form', 'explode': True }})
    time_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeOffset', 'style': 'form', 'explode': True }})
    time_window: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeWindow', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNextDeparturesByCrsRequest:
    path_params: GetNextDeparturesByCrsPathParams = dataclasses.field()
    query_params: GetNextDeparturesByCrsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNextDeparturesByCrsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
