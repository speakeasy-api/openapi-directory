import dataclasses
from typing import Optional
from ..shared import workspacecreate as shared_workspacecreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import workspaceread as shared_workspaceread


@dataclasses.dataclass
class CreateWorkspaceRequest:
    request: shared_workspacecreate.WorkspaceCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    workspace_read: Optional[shared_workspaceread.WorkspaceRead] = dataclasses.field(default=None)
    
