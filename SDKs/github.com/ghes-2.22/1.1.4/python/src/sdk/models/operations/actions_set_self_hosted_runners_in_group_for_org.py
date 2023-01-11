import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody:
    runners: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    

@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequest:
    path_params: ActionsSetSelfHostedRunnersInGroupForOrgPathParams = dataclasses.field()
    request: Optional[ActionsSetSelfHostedRunnersInGroupForOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
