import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class FunctionsDeletePathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsDeleteSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsDeleteRequest:
    path_params: FunctionsDeletePathParams = dataclasses.field()
    security: FunctionsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
