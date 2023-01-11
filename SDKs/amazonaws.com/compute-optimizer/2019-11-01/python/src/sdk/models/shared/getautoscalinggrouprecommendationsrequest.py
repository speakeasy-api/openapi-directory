import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filter as shared_filter
from ..shared import recommendationpreferences as shared_recommendationpreferences


@dataclass_json
@dataclasses.dataclass
class GetAutoScalingGroupRecommendationsRequest:
    account_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    auto_scaling_group_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupArns') }})
    filters: Optional[list[shared_filter.Filter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    recommendation_preferences: Optional[shared_recommendationpreferences.RecommendationPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationPreferences') }})
    
