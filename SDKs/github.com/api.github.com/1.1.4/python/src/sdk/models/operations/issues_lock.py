import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class IssuesLockPathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesLockRequestBodyLockReasonEnum(str, Enum):
    OFF_TOPIC = "off-topic"
    TOO_HEATED = "too heated"
    RESOLVED = "resolved"
    SPAM = "spam"


@dataclass_json
@dataclasses.dataclass
class IssuesLockRequestBody:
    lock_reason: Optional[IssuesLockRequestBodyLockReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_reason') }})
    

@dataclasses.dataclass
class IssuesLockRequest:
    path_params: IssuesLockPathParams = dataclasses.field()
    request: Optional[IssuesLockRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IssuesLockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
