import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getrecommendationerror as shared_getrecommendationerror
from ..shared import instancerecommendation as shared_instancerecommendation


@dataclass_json
@dataclasses.dataclass
class GetEc2InstanceRecommendationsResponse:
    errors: Optional[list[shared_getrecommendationerror.GetRecommendationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    instance_recommendations: Optional[list[shared_instancerecommendation.InstanceRecommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceRecommendations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
