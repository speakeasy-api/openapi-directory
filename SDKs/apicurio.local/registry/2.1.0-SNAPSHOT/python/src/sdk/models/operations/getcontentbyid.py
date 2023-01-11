import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetContentByIDPathParams:
    content_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentByIDRequest:
    path_params: GetContentByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    file_content: Optional[bytes] = dataclasses.field(default=None)
    
