import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import function as shared_function


@dataclasses.dataclass
class FunctionsGetPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsGetSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsGetRequest:
    path_params: FunctionsGetPathParams = dataclasses.field()
    security: FunctionsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function: Optional[shared_function.Function] = dataclasses.field(default=None)
    
