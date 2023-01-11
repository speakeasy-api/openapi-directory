import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchAttachObjectResponse:
    r"""BatchAttachObjectResponse
    Represents the output batch <a>AttachObject</a> response operation.
    """
    
    attached_object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedObjectIdentifier') }})
    
