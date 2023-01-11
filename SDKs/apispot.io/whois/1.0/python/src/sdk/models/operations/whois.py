import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class WhoisPathParams:
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    
class WhoisFormatEnum(str, Enum):
    RAW = "raw"
    FORMATTED = "formatted"
    JSON = "json"


@dataclasses.dataclass
class WhoisQueryParams:
    format: Optional[WhoisFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WhoisRequest:
    path_params: WhoisPathParams = dataclasses.field()
    query_params: WhoisQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class WhoisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
