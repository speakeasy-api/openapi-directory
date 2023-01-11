import dataclasses
from typing import Optional
from ..shared import authentication_token as shared_authentication_token


@dataclasses.dataclass
class ActionsCreateRegistrationTokenForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsCreateRegistrationTokenForOrgRequest:
    path_params: ActionsCreateRegistrationTokenForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsCreateRegistrationTokenForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authentication_token: Optional[shared_authentication_token.AuthenticationToken] = dataclasses.field(default=None)
    
