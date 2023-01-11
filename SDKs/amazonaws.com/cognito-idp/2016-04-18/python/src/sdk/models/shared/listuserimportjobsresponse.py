import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userimportjobtype as shared_userimportjobtype


@dataclass_json
@dataclasses.dataclass
class ListUserImportJobsResponse:
    r"""ListUserImportJobsResponse
    Represents the response from the server to the request to list the user import jobs.
    """
    
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    user_import_jobs: Optional[list[shared_userimportjobtype.UserImportJobType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserImportJobs') }})
    
