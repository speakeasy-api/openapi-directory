import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment_reviewer_type_enum as shared_deployment_reviewer_type_enum
from ..shared import deployment_branch_policy as shared_deployment_branch_policy
from ..shared import basic_error as shared_basic_error
from ..shared import environment as shared_environment


@dataclasses.dataclass
class ReposCreateOrUpdateEnvironmentPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateOrUpdateEnvironmentRequestBodyReviewers:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[shared_deployment_reviewer_type_enum.DeploymentReviewerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateOrUpdateEnvironmentRequestBody:
    deployment_branch_policy: Optional[shared_deployment_branch_policy.DeploymentBranchPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment_branch_policy') }})
    reviewers: Optional[list[ReposCreateOrUpdateEnvironmentRequestBodyReviewers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    wait_timer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer') }})
    

@dataclasses.dataclass
class ReposCreateOrUpdateEnvironmentRequest:
    path_params: ReposCreateOrUpdateEnvironmentPathParams = dataclasses.field()
    request: Optional[ReposCreateOrUpdateEnvironmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateOrUpdateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None)
    
