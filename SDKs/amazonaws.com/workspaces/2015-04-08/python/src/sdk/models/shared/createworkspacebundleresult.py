import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacebundle as shared_workspacebundle


@dataclass_json
@dataclasses.dataclass
class CreateWorkspaceBundleResult:
    workspace_bundle: Optional[shared_workspacebundle.WorkspaceBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceBundle') }})
    
