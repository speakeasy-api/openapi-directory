import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class TeamsDeleteMembershipPathParams:
    membership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteMembershipSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsDeleteMembershipRequest:
    path_params: TeamsDeleteMembershipPathParams = dataclasses.field()
    security: TeamsDeleteMembershipSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteMembershipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
