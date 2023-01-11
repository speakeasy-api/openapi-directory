import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightselector as shared_insightselector


@dataclass_json
@dataclasses.dataclass
class PutInsightSelectorsRequest:
    insight_selectors: list[shared_insightselector.InsightSelector] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightSelectors') }})
    trail_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailName') }})
    
