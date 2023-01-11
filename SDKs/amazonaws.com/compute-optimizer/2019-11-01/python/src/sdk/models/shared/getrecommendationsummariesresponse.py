import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationsummary as shared_recommendationsummary


@dataclass_json
@dataclasses.dataclass
class GetRecommendationSummariesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    recommendation_summaries: Optional[list[shared_recommendationsummary.RecommendationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSummaries') }})
    
