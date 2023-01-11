import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createadrequest as shared_createadrequest


@dataclass_json
@dataclasses.dataclass
class BulkCreateAdRequest:
    r"""BulkCreateAdRequest
    This type defines the fields for the create ads in bulk by listing IDs.
    """
    
    requests: Optional[list[shared_createadrequest.CreateAdRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
