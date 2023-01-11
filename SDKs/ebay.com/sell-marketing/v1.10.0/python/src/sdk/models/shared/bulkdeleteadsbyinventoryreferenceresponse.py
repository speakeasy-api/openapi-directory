import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteadsbyinventoryreferenceresponse as shared_deleteadsbyinventoryreferenceresponse


@dataclass_json
@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferenceResponse:
    r"""BulkDeleteAdsByInventoryReferenceResponse
    This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
    """
    
    responses: Optional[list[shared_deleteadsbyinventoryreferenceresponse.DeleteAdsByInventoryReferenceResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
