import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsCreateWorkflowDispatchPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsCreateWorkflowDispatchRequestBody:
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    inputs: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    

@dataclasses.dataclass
class ActionsCreateWorkflowDispatchRequest:
    path_params: ActionsCreateWorkflowDispatchPathParams = dataclasses.field()
    request: Optional[ActionsCreateWorkflowDispatchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsCreateWorkflowDispatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
