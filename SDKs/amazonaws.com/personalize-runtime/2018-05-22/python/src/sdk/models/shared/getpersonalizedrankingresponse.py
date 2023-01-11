import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import predicteditem as shared_predicteditem


@dataclass_json
@dataclasses.dataclass
class GetPersonalizedRankingResponse:
    personalized_ranking: Optional[list[shared_predicteditem.PredictedItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalizedRanking') }})
    recommendation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationId') }})
    
