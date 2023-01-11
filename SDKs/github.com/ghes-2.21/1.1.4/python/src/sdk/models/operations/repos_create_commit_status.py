import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclasses.dataclass
class ReposCreateCommitStatusPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    
class ReposCreateCommitStatusRequestBodyStateEnum(str, Enum):
    ERROR = "error"
    FAILURE = "failure"
    PENDING = "pending"
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class ReposCreateCommitStatusRequestBody:
    state: ReposCreateCommitStatusRequestBodyStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    target_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclasses.dataclass
class ReposCreateCommitStatusRequest:
    path_params: ReposCreateCommitStatusPathParams = dataclasses.field()
    request: Optional[ReposCreateCommitStatusRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateCommitStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    status: Optional[shared_status.Status] = dataclasses.field(default=None)
    
