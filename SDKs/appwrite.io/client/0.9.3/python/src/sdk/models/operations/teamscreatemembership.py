import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import membership as shared_membership


@dataclasses.dataclass
class TeamsCreateMembershipPathParams:
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateMembershipRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class TeamsCreateMembershipSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsCreateMembershipRequest:
    path_params: TeamsCreateMembershipPathParams = dataclasses.field()
    security: TeamsCreateMembershipSecurity = dataclasses.field()
    request: Optional[TeamsCreateMembershipRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateMembershipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    membership: Optional[shared_membership.Membership] = dataclasses.field(default=None)
    
