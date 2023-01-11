import dataclasses
from typing import Optional
from ..shared import build as shared_build
from ..shared import error as shared_error


@dataclasses.dataclass
class DecodeViaEpiPathParams:
    vin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DecodeViaEpiQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DecodeViaEpiRequest:
    path_params: DecodeViaEpiPathParams = dataclasses.field()
    query_params: DecodeViaEpiQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DecodeViaEpiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    build: Optional[shared_build.Build] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
