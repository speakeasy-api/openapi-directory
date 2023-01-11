import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proactiveinsightsummary as shared_proactiveinsightsummary
from ..shared import reactiveinsightsummary as shared_reactiveinsightsummary


@dataclass_json
@dataclasses.dataclass
class ListInsightsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    proactive_insights: Optional[list[shared_proactiveinsightsummary.ProactiveInsightSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveInsights') }})
    reactive_insights: Optional[list[shared_reactiveinsightsummary.ReactiveInsightSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveInsights') }})
    
