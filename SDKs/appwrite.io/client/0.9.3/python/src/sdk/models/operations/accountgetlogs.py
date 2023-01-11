import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import loglist as shared_loglist


@dataclasses.dataclass
class AccountGetLogsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountGetLogsRequest:
    security: AccountGetLogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountGetLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    log_list: Optional[shared_loglist.LogList] = dataclasses.field(default=None)
    
