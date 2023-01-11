import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RebootRequest:
    r"""RebootRequest
    Describes the information used to reboot a WorkSpace.
    """
    
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    
