import dataclasses
from typing import Optional
from ..shared import slugrequestbody as shared_slugrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import workspaceread as shared_workspaceread


@dataclasses.dataclass
class GetWorkspaceBySlugRequest:
    request: shared_slugrequestbody.SlugRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetWorkspaceBySlugResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    workspace_read: Optional[shared_workspaceread.WorkspaceRead] = dataclasses.field(default=None)
    
