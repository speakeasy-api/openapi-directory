import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewpolicylevel_enum as shared_reviewpolicylevel_enum


@dataclass_json
@dataclasses.dataclass
class ListReviewPolicyResultsForHitRequest:
    hit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    policy_levels: Optional[list[shared_reviewpolicylevel_enum.ReviewPolicyLevelEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyLevels') }})
    retrieve_actions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrieveActions') }})
    retrieve_results: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrieveResults') }})
    
