import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteadresponse as shared_deleteadresponse


@dataclass_json
@dataclasses.dataclass
class BulkDeleteAdResponse:
    r"""BulkDeleteAdResponse
    This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
    """
    
    responses: Optional[list[shared_deleteadresponse.DeleteAdResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
