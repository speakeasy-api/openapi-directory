import dataclasses



@dataclasses.dataclass
class ReposDeleteInvitationPathParams:
    invitation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteInvitationRequest:
    path_params: ReposDeleteInvitationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
