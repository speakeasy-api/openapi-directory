import dataclasses
from typing import Optional
from ..shared import responseitem as shared_responseitem


@dataclasses.dataclass
class BinLookupPathParams:
    bin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BinLookupQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BinLookupRequest:
    path_params: BinLookupPathParams = dataclasses.field()
    query_params: BinLookupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BinLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_items: Optional[list[shared_responseitem.ResponseItem]] = dataclasses.field(default=None)
    
