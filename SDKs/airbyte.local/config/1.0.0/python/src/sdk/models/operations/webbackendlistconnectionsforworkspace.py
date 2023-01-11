import dataclasses
from typing import Optional
from ..shared import workspaceidrequestbody as shared_workspaceidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import webbackendconnectionreadlist as shared_webbackendconnectionreadlist


@dataclasses.dataclass
class WebBackendListConnectionsForWorkspaceRequest:
    request: shared_workspaceidrequestbody.WorkspaceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendListConnectionsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    web_backend_connection_read_list: Optional[shared_webbackendconnectionreadlist.WebBackendConnectionReadList] = dataclasses.field(default=None)
    
