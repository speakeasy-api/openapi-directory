import dataclasses
from typing import Optional
from enum import Enum
from ..shared import api_key_enum as shared_api_key_enum
from ..shared import api_key_enum1 as shared_api_key_enum1
from ..shared import error as shared_error
from ..shared import popularcars as shared_popularcars


@dataclasses.dataclass
class GetPopularCarsQueryParams:
    car_type: shared_api_key_enum.APIKeyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[shared_api_key_enum1.APIKeyEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPopularCarsRequest:
    query_params: GetPopularCarsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPopularCarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    popular_cars: Optional[shared_popularcars.PopularCars] = dataclasses.field(default=None)
    
