import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobresponse as shared_importjobresponse


@dataclass_json
@dataclasses.dataclass
class ImportJobsResponse:
    r"""ImportJobsResponse
    Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
    """
    
    item: list[shared_importjobresponse.ImportJobResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
