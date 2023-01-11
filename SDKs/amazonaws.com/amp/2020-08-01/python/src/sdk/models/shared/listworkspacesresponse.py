import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacesummary as shared_workspacesummary


@dataclass_json
@dataclasses.dataclass
class ListWorkspacesResponse:
    r"""ListWorkspacesResponse
    Represents the output of a ListWorkspaces operation.
    """
    
    workspaces: list[shared_workspacesummary.WorkspaceSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
