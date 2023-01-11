import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteUsersUseridAuthorizationPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUsersUseridAuthorizationSecurity:
    client_access_token: shared_security.SchemeClientAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteUsersUseridAuthorizationRequest:
    path_params: DeleteUsersUseridAuthorizationPathParams = dataclasses.field()
    security: DeleteUsersUseridAuthorizationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUsersUseridAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
