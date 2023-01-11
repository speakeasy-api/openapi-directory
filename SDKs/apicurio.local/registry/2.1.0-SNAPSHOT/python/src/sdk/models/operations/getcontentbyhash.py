import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetContentByHashPathParams:
    content_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contentHash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentByHashRequest:
    path_params: GetContentByHashPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentByHashResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    file_content: Optional[bytes] = dataclasses.field(default=None)
    
