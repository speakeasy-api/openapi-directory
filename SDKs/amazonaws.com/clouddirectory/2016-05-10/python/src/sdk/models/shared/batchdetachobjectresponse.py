import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchDetachObjectResponse:
    r"""BatchDetachObjectResponse
    Represents the output of a <a>DetachObject</a> response operation.
    """
    
    detached_object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detachedObjectIdentifier') }})
    
