import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountDeleteSessionsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountDeleteSessionsRequest:
    security: AccountDeleteSessionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountDeleteSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
