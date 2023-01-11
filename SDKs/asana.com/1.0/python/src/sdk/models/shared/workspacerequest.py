import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkspaceRequestInput:
    r"""WorkspaceRequestInput
    A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
