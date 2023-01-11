import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import execution as shared_execution


@dataclasses.dataclass
class FunctionsGetExecutionPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsGetExecutionSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsGetExecutionRequest:
    path_params: FunctionsGetExecutionPathParams = dataclasses.field()
    security: FunctionsGetExecutionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsGetExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    execution: Optional[shared_execution.Execution] = dataclasses.field(default=None)
    
