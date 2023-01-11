import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_enterprise as shared_runner_groups_enterprise


@dataclasses.dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    selected_organization_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organization_ids') }})
    visibility: Optional[EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_enterprise: Optional[shared_runner_groups_enterprise.RunnerGroupsEnterprise] = dataclasses.field(default=None)
    
