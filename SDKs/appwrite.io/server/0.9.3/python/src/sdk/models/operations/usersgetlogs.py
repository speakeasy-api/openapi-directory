import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import loglist as shared_loglist


@dataclasses.dataclass
class UsersGetLogsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetLogsSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsersGetLogsRequest:
    path_params: UsersGetLogsPathParams = dataclasses.field()
    security: UsersGetLogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    log_list: Optional[shared_loglist.LogList] = dataclasses.field(default=None)
    
