import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchrequestaction as shared_batchrequestaction


@dataclass_json
@dataclasses.dataclass
class BatchRequest:
    r"""BatchRequest
    A request object for use in a batch request.
    """
    
    actions: Optional[list[shared_batchrequestaction.BatchRequestAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    
