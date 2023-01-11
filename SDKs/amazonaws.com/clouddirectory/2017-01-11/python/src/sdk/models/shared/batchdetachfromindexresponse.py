import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchDetachFromIndexResponse:
    r"""BatchDetachFromIndexResponse
    Represents the output of a <a>DetachFromIndex</a> response operation.
    """
    
    detached_object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachedObjectIdentifier') }})
    
