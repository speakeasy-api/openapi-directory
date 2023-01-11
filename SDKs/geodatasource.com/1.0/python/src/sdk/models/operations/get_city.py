import dataclasses
from typing import Optional
from enum import Enum

class GetCityFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetCityQueryParams:
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    format: Optional[GetCityFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCityRequest:
    query_params: GetCityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_city_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
