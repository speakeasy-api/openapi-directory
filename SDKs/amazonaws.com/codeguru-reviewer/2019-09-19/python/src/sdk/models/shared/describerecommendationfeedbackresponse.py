import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationfeedback as shared_recommendationfeedback


@dataclass_json
@dataclasses.dataclass
class DescribeRecommendationFeedbackResponse:
    recommendation_feedback: Optional[shared_recommendationfeedback.RecommendationFeedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationFeedback') }})
    
