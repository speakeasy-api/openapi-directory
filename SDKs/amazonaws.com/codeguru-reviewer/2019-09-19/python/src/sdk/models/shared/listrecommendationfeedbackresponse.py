import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationfeedbacksummary as shared_recommendationfeedbacksummary


@dataclass_json
@dataclasses.dataclass
class ListRecommendationFeedbackResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    recommendation_feedback_summaries: Optional[list[shared_recommendationfeedbacksummary.RecommendationFeedbackSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationFeedbackSummaries') }})
    
