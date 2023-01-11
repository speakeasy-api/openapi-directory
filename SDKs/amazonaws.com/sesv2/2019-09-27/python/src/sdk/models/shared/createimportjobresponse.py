import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateImportJobResponse:
    r"""CreateImportJobResponse
    An HTTP 200 response if the request succeeds, or an error message if the request fails.
    """
    
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    
