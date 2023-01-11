import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchGetObjectInformation:
    r"""BatchGetObjectInformation
    Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    
