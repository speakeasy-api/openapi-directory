import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callanalyticsjob as shared_callanalyticsjob


@dataclass_json
@dataclasses.dataclass
class StartCallAnalyticsJobResponse:
    call_analytics_job: Optional[shared_callanalyticsjob.CallAnalyticsJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJob') }})
    
