import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proactiveanomalysummary as shared_proactiveanomalysummary
from ..shared import reactiveanomalysummary as shared_reactiveanomalysummary


@dataclass_json
@dataclasses.dataclass
class ListAnomaliesForInsightResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    proactive_anomalies: Optional[list[shared_proactiveanomalysummary.ProactiveAnomalySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveAnomalies') }})
    reactive_anomalies: Optional[list[shared_reactiveanomalysummary.ReactiveAnomalySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveAnomalies') }})
    
