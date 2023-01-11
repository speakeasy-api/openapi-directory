import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchDetachFromIndex:
    r"""BatchDetachFromIndex
    Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    index_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexReference') }})
    target_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetReference') }})
    
