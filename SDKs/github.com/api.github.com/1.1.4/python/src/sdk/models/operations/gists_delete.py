import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class GistsDeletePathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsDeleteRequest:
    path_params: GistsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
