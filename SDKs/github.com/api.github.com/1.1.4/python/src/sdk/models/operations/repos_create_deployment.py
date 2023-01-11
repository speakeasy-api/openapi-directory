import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment as shared_deployment
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateDeploymentPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateDeploymentRequestBody:
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    auto_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_merge') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    payload: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    production_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production_environment') }})
    required_contexts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_contexts') }})
    task: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    transient_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transient_environment') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateDeployment202ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateDeployment409ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposCreateDeploymentRequest:
    path_params: ReposCreateDeploymentPathParams = dataclasses.field()
    request: Optional[ReposCreateDeploymentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment: Optional[shared_deployment.Deployment] = dataclasses.field(default=None)
    repos_create_deployment_202_application_json_object: Optional[ReposCreateDeployment202ApplicationJSON] = dataclasses.field(default=None)
    repos_create_deployment_409_application_json_object: Optional[ReposCreateDeployment409ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
