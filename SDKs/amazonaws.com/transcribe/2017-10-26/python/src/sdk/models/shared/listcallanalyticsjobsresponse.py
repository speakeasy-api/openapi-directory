import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callanalyticsjobsummary as shared_callanalyticsjobsummary
from ..shared import callanalyticsjobstatus_enum as shared_callanalyticsjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListCallAnalyticsJobsResponse:
    call_analytics_job_summaries: Optional[list[shared_callanalyticsjobsummary.CallAnalyticsJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[shared_callanalyticsjobstatus_enum.CallAnalyticsJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
