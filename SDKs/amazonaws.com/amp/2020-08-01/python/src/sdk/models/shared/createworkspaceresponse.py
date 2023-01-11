import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacestatus as shared_workspacestatus


@dataclass_json
@dataclasses.dataclass
class CreateWorkspaceResponse:
    r"""CreateWorkspaceResponse
    Represents the output of a CreateWorkspace operation.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    status: shared_workspacestatus.WorkspaceStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
