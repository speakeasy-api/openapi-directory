import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchDetachPolicy:
    r"""BatchDetachPolicy
    Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
    """
    
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    policy_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyReference') }})
    
