import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposAddUserAccessRestrictionsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposAddUserAccessRestrictionsRequestBody1:
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class ReposAddUserAccessRestrictionsRequest:
    path_params: ReposAddUserAccessRestrictionsPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposAddUserAccessRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
