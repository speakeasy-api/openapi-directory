import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentimentdetectionjobfilter as shared_sentimentdetectionjobfilter


@dataclass_json
@dataclasses.dataclass
class ListSentimentDetectionJobsRequest:
    filter: Optional[shared_sentimentdetectionjobfilter.SentimentDetectionJobFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
