import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountDeleteSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountDeleteRequest:
    security: AccountDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
