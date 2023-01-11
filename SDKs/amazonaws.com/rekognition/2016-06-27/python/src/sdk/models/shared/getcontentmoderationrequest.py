import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentmoderationsortby_enum as shared_contentmoderationsortby_enum


@dataclass_json
@dataclasses.dataclass
class GetContentModerationRequest:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort_by: Optional[shared_contentmoderationsortby_enum.ContentModerationSortByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    
