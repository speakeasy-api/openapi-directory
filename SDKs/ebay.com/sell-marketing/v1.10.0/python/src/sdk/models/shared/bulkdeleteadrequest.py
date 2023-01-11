import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteadrequest as shared_deleteadrequest


@dataclass_json
@dataclasses.dataclass
class BulkDeleteAdRequest:
    r"""BulkDeleteAdRequest
    This type defines the fields that the call uses to remove ads in bulk.
    """
    
    requests: Optional[list[shared_deleteadrequest.DeleteAdRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
