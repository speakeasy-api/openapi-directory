import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightselector as shared_insightselector


@dataclass_json
@dataclasses.dataclass
class PutInsightSelectorsResponse:
    insight_selectors: Optional[list[shared_insightselector.InsightSelector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightSelectors') }})
    trail_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailARN') }})
    
