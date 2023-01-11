import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import jwt as shared_jwt


@dataclasses.dataclass
class AccountCreateJwtSecurity:
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateJwtRequest:
    security: AccountCreateJwtSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCreateJwtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jwt: Optional[shared_jwt.Jwt] = dataclasses.field(default=None)
    
