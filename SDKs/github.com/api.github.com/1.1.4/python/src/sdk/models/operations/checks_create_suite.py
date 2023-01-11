import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check_suite as shared_check_suite


@dataclasses.dataclass
class ChecksCreateSuitePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksCreateSuiteRequestBody:
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    

@dataclasses.dataclass
class ChecksCreateSuiteRequest:
    path_params: ChecksCreateSuitePathParams = dataclasses.field()
    request: Optional[ChecksCreateSuiteRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChecksCreateSuiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_suite: Optional[shared_check_suite.CheckSuite] = dataclasses.field(default=None)
    
