import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggrouprecommendation as shared_autoscalinggrouprecommendation
from ..shared import getrecommendationerror as shared_getrecommendationerror


@dataclass_json
@dataclasses.dataclass
class GetAutoScalingGroupRecommendationsResponse:
    auto_scaling_group_recommendations: Optional[list[shared_autoscalinggrouprecommendation.AutoScalingGroupRecommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupRecommendations') }})
    errors: Optional[list[shared_getrecommendationerror.GetRecommendationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
