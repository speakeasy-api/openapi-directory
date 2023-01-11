import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchListAttachedIndices:
    r"""BatchListAttachedIndices
    Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    target_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetReference') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
