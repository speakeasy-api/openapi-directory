import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import team_membership as shared_team_membership


@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequest:
    path_params: TeamsAddOrUpdateMembershipForUserLegacyPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    
