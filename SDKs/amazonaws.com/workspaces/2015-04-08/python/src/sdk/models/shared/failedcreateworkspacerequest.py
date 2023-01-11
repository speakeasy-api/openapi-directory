import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacerequest as shared_workspacerequest


@dataclass_json
@dataclasses.dataclass
class FailedCreateWorkspaceRequest:
    r"""FailedCreateWorkspaceRequest
    Describes a WorkSpace that cannot be created.
    """
    
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    workspace_request: Optional[shared_workspacerequest.WorkspaceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceRequest') }})
    
