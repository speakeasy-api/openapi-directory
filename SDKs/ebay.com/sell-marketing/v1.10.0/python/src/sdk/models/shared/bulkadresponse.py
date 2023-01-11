import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adresponse as shared_adresponse


@dataclass_json
@dataclasses.dataclass
class BulkAdResponse:
    r"""BulkAdResponse
    This type defines the fields for the create ads in bulk response.
    """
    
    responses: Optional[list[shared_adresponse.AdResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
