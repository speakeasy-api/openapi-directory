import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchAttachObject:
    r"""BatchAttachObject
    Represents the output of an <a>AttachObject</a> operation.
    """
    
    child_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChildReference') }})
    link_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
