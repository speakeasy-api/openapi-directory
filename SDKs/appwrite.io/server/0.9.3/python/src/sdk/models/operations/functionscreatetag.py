import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import tag as shared_tag


@dataclasses.dataclass
class FunctionsCreateTagPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsCreateTagRequestBody:
    code: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'code' }})
    command: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'command' }})
    

@dataclasses.dataclass
class FunctionsCreateTagSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsCreateTagRequest:
    path_params: FunctionsCreateTagPathParams = dataclasses.field()
    security: FunctionsCreateTagSecurity = dataclasses.field()
    request: Optional[FunctionsCreateTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FunctionsCreateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
