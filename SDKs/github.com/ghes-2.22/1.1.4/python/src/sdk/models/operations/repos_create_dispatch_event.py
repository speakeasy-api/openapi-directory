import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateDispatchEventPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateDispatchEventRequestBody:
    event_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    client_payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_payload') }})
    

@dataclasses.dataclass
class ReposCreateDispatchEventRequest:
    path_params: ReposCreateDispatchEventPathParams = dataclasses.field()
    request: Optional[ReposCreateDispatchEventRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateDispatchEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
