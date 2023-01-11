import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposSetAppAccessRestrictionsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposSetAppAccessRestrictionsRequestBody1:
    apps: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    

@dataclasses.dataclass
class ReposSetAppAccessRestrictionsRequest:
    path_params: ReposSetAppAccessRestrictionsPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposSetAppAccessRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integrations: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
