import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import sessionlist as shared_sessionlist


@dataclasses.dataclass
class AccountGetSessionsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountGetSessionsRequest:
    security: AccountGetSessionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountGetSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session_list: Optional[shared_sessionlist.SessionList] = dataclasses.field(default=None)
    
