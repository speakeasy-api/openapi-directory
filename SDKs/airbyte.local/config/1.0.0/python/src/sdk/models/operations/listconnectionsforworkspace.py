import dataclasses
from typing import Optional
from ..shared import workspaceidrequestbody as shared_workspaceidrequestbody
from ..shared import connectionreadlist as shared_connectionreadlist
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class ListConnectionsForWorkspaceRequest:
    request: shared_workspaceidrequestbody.WorkspaceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListConnectionsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection_read_list: Optional[shared_connectionreadlist.ConnectionReadList] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
