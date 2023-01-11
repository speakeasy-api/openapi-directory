import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacestatuscode_enum as shared_workspacestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class WorkspaceStatus:
    r"""WorkspaceStatus
    Represents the status of a workspace.
    """
    
    status_code: shared_workspacestatuscode_enum.WorkspaceStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
