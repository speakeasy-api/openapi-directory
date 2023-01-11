import dataclasses
from typing import Optional
from ..shared import workspaceidrequestbody as shared_workspaceidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import sourcereadlist as shared_sourcereadlist


@dataclasses.dataclass
class ListSourcesForWorkspaceRequest:
    request: shared_workspaceidrequestbody.WorkspaceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListSourcesForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    source_read_list: Optional[shared_sourcereadlist.SourceReadList] = dataclasses.field(default=None)
    
