import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicsdetectionjobfilter as shared_topicsdetectionjobfilter


@dataclass_json
@dataclasses.dataclass
class ListTopicsDetectionJobsRequest:
    filter: Optional[shared_topicsdetectionjobfilter.TopicsDetectionJobFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
