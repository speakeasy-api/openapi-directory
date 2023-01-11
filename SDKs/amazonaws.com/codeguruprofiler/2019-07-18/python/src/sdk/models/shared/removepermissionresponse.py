import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemovePermissionResponse:
    r"""RemovePermissionResponse
    The structure representing the <code>removePermissionResponse</code>.
    """
    
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    revision_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
