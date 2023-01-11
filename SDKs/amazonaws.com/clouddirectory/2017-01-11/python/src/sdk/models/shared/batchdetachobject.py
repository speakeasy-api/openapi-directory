import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchDetachObject:
    r"""BatchDetachObject
    Represents the output of a <a>DetachObject</a> operation.
    """
    
    link_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    batch_reference_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    
