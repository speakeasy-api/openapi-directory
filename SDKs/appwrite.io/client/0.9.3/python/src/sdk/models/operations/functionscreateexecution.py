import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import execution as shared_execution


@dataclasses.dataclass
class FunctionsCreateExecutionPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class FunctionsCreateExecutionRequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class FunctionsCreateExecutionSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsCreateExecutionRequest:
    path_params: FunctionsCreateExecutionPathParams = dataclasses.field()
    security: FunctionsCreateExecutionSecurity = dataclasses.field()
    request: Optional[FunctionsCreateExecutionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FunctionsCreateExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    execution: Optional[shared_execution.Execution] = dataclasses.field(default=None)
    
