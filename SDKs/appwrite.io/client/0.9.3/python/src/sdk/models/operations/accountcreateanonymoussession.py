import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import session as shared_session


@dataclasses.dataclass
class AccountCreateAnonymousSessionSecurity:
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateAnonymousSessionRequest:
    security: AccountCreateAnonymousSessionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCreateAnonymousSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session: Optional[shared_session.Session] = dataclasses.field(default=None)
    
