import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class FunctionsDeleteTagPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsDeleteTagSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsDeleteTagRequest:
    path_params: FunctionsDeleteTagPathParams = dataclasses.field()
    security: FunctionsDeleteTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsDeleteTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
