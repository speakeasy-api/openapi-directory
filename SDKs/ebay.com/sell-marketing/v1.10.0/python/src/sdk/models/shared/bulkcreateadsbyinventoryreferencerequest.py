import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createadsbyinventoryreferencerequest as shared_createadsbyinventoryreferencerequest


@dataclass_json
@dataclasses.dataclass
class BulkCreateAdsByInventoryReferenceRequest:
    r"""BulkCreateAdsByInventoryReferenceRequest
    This type defines the fields used to create ads in bulk by inventory reference IDs.
    """
    
    requests: Optional[list[shared_createadsbyinventoryreferencerequest.CreateAdsByInventoryReferenceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
