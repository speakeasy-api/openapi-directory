import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightfeedback as shared_insightfeedback


@dataclass_json
@dataclasses.dataclass
class DescribeFeedbackResponse:
    insight_feedback: Optional[shared_insightfeedback.InsightFeedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightFeedback') }})
    
