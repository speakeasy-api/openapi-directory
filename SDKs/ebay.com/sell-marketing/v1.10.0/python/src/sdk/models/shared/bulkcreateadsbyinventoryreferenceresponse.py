import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createadsbyinventoryreferenceresponse as shared_createadsbyinventoryreferenceresponse


@dataclass_json
@dataclasses.dataclass
class BulkCreateAdsByInventoryReferenceResponse:
    r"""BulkCreateAdsByInventoryReferenceResponse
    This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
    """
    
    responses: Optional[list[shared_createadsbyinventoryreferenceresponse.CreateAdsByInventoryReferenceResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
