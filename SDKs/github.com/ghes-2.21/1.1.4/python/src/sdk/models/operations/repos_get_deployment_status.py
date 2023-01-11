import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import deployment_status as shared_deployment_status


@dataclasses.dataclass
class ReposGetDeploymentStatusPathParams:
    deployment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    status_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'status_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposGetDeploymentStatus415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposGetDeploymentStatusRequest:
    path_params: ReposGetDeploymentStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetDeploymentStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    deployment_status: Optional[shared_deployment_status.DeploymentStatus] = dataclasses.field(default=None)
    repos_get_deployment_status_415_application_json_object: Optional[ReposGetDeploymentStatus415ApplicationJSON] = dataclasses.field(default=None)
    
