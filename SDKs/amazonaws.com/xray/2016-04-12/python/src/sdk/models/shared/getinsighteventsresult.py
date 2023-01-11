import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightevent as shared_insightevent


@dataclass_json
@dataclasses.dataclass
class GetInsightEventsResult:
    insight_events: Optional[list[shared_insightevent.InsightEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightEvents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
