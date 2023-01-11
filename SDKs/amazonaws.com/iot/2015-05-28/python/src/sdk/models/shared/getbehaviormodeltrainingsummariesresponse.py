import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behaviormodeltrainingsummary as shared_behaviormodeltrainingsummary


@dataclass_json
@dataclasses.dataclass
class GetBehaviorModelTrainingSummariesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    summaries: Optional[list[shared_behaviormodeltrainingsummary.BehaviorModelTrainingSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
