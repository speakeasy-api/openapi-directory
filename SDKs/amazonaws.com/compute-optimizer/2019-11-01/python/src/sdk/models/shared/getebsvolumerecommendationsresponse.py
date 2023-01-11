import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getrecommendationerror as shared_getrecommendationerror
from ..shared import volumerecommendation as shared_volumerecommendation


@dataclass_json
@dataclasses.dataclass
class GetEbsVolumeRecommendationsResponse:
    errors: Optional[list[shared_getrecommendationerror.GetRecommendationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    volume_recommendations: Optional[list[shared_volumerecommendation.VolumeRecommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRecommendations') }})
    
