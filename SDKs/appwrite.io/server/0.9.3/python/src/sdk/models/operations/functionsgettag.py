import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import tag as shared_tag


@dataclasses.dataclass
class FunctionsGetTagPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsGetTagSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsGetTagRequest:
    path_params: FunctionsGetTagPathParams = dataclasses.field()
    security: FunctionsGetTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsGetTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
