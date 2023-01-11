import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListUserImportJobsRequest:
    r"""ListUserImportJobsRequest
    Represents the request to list the user import jobs.
    """
    
    max_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
