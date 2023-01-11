import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountDeleteSessionPathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountDeleteSessionSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountDeleteSessionRequest:
    path_params: AccountDeleteSessionPathParams = dataclasses.field()
    security: AccountDeleteSessionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountDeleteSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
