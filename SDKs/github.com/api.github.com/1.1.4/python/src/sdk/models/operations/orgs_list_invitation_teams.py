import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team as shared_team


@dataclasses.dataclass
class OrgsListInvitationTeamsPathParams:
    invitation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListInvitationTeamsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListInvitationTeamsRequest:
    path_params: OrgsListInvitationTeamsPathParams = dataclasses.field()
    query_params: OrgsListInvitationTeamsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListInvitationTeamsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
