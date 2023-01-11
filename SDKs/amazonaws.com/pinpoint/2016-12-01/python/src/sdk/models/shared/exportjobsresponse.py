import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportjobresponse as shared_exportjobresponse


@dataclass_json
@dataclasses.dataclass
class ExportJobsResponse:
    r"""ExportJobsResponse
    Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
    """
    
    item: list[shared_exportjobresponse.ExportJobResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
