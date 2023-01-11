import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteUsersUseridPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUsersUseridSecurity:
    client_access_token: shared_security.SchemeClientAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteUsersUseridRequest:
    path_params: DeleteUsersUseridPathParams = dataclasses.field()
    security: DeleteUsersUseridSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUsersUseridResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
