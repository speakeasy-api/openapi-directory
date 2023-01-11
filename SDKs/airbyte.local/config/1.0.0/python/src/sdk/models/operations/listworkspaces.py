import dataclasses
from typing import Optional
from ..shared import workspacereadlist as shared_workspacereadlist


@dataclasses.dataclass
class ListWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    workspace_read_list: Optional[shared_workspacereadlist.WorkspaceReadList] = dataclasses.field(default=None)
    
