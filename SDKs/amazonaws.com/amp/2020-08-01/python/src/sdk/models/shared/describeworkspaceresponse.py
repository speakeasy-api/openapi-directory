import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacedescription as shared_workspacedescription


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspaceResponse:
    r"""DescribeWorkspaceResponse
    Represents the output of a DescribeWorkspace operation.
    """
    
    workspace: shared_workspacedescription.WorkspaceDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
