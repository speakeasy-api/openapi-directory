import dataclasses
from typing import Optional
from ..shared import styleentity as shared_styleentity


@dataclasses.dataclass
class GetStylesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStylesPathRequest:
    path_params: GetStylesPathPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStylesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    style_entity: Optional[shared_styleentity.StyleEntity] = dataclasses.field(default=None)
    
