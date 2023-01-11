import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteadsbyinventoryreferencerequest as shared_deleteadsbyinventoryreferencerequest


@dataclass_json
@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    r"""BulkDeleteAdsByInventoryReferenceRequest
    This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
    """
    
    requests: Optional[list[shared_deleteadsbyinventoryreferencerequest.DeleteAdsByInventoryReferenceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
