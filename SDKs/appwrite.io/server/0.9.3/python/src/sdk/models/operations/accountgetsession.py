import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import session as shared_session


@dataclasses.dataclass
class AccountGetSessionPathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountGetSessionSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountGetSessionRequest:
    path_params: AccountGetSessionPathParams = dataclasses.field()
    security: AccountGetSessionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountGetSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session: Optional[shared_session.Session] = dataclasses.field(default=None)
    
