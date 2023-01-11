import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_org as shared_runner_groups_org


@dataclasses.dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    selected_repository_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    visibility: Optional[ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsCreateSelfHostedRunnerGroupForOrgPathParams = dataclasses.field()
    request: Optional[ActionsCreateSelfHostedRunnerGroupForOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_org: Optional[shared_runner_groups_org.RunnerGroupsOrg] = dataclasses.field(default=None)
    
