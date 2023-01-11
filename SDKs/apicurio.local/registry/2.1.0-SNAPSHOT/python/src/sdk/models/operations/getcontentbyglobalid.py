import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetContentByGlobalIDPathParams:
    global_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentByGlobalIDRequest:
    path_params: GetContentByGlobalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentByGlobalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    file_content: Optional[bytes] = dataclasses.field(default=None)
    
