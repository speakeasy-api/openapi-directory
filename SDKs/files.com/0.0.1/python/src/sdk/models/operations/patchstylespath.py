import dataclasses
from typing import Optional
from ..shared import styleentity as shared_styleentity


@dataclasses.dataclass
class PatchStylesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchStylesPathRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PatchStylesPathRequestBody:
    file: PatchStylesPathRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PatchStylesPathRequest:
    path_params: PatchStylesPathPathParams = dataclasses.field()
    request: PatchStylesPathRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchStylesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    style_entity: Optional[shared_styleentity.StyleEntity] = dataclasses.field(default=None)
    
