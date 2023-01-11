import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobsummary as shared_importjobsummary


@dataclass_json
@dataclasses.dataclass
class ListImportJobsResponse:
    r"""ListImportJobsResponse
    An HTTP 200 response if the request succeeds, or an error message if the request fails.
    """
    
    import_jobs: Optional[list[shared_importjobsummary.ImportJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
