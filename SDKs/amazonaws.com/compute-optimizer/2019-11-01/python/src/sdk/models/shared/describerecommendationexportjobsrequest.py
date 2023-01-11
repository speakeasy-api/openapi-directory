import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobfilter as shared_jobfilter


@dataclass_json
@dataclasses.dataclass
class DescribeRecommendationExportJobsRequest:
    filters: Optional[list[shared_jobfilter.JobFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    job_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobIds') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
