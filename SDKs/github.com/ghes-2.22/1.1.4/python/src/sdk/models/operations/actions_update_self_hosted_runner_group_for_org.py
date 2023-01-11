import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_org as shared_runner_groups_org


@dataclasses.dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visibility: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams = dataclasses.field()
    request: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_org: Optional[shared_runner_groups_org.RunnerGroupsOrg] = dataclasses.field(default=None)
    
