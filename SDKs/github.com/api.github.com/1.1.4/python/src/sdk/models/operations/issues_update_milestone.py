import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import milestone as shared_milestone


@dataclasses.dataclass
class IssuesUpdateMilestonePathParams:
    milestone_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'milestone_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesUpdateMilestoneRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclasses.dataclass
class IssuesUpdateMilestoneRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    state: Optional[IssuesUpdateMilestoneRequestBodyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class IssuesUpdateMilestoneRequest:
    path_params: IssuesUpdateMilestonePathParams = dataclasses.field()
    request: Optional[IssuesUpdateMilestoneRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IssuesUpdateMilestoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    milestone: Optional[shared_milestone.Milestone] = dataclasses.field(default=None)
    
