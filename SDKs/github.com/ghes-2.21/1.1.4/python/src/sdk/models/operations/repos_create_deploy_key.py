import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploy_key as shared_deploy_key
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateDeployKeyPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateDeployKeyRequestBody:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class ReposCreateDeployKeyRequest:
    path_params: ReposCreateDeployKeyPathParams = dataclasses.field()
    request: Optional[ReposCreateDeployKeyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateDeployKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    deploy_key: Optional[shared_deploy_key.DeployKey] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
