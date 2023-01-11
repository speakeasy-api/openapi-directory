import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationrelatedeventresource as shared_recommendationrelatedeventresource


@dataclass_json
@dataclasses.dataclass
class RecommendationRelatedEvent:
    r"""RecommendationRelatedEvent
     Information about an event that is related to a recommendation. 
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resources: Optional[list[shared_recommendationrelatedeventresource.RecommendationRelatedEventResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    
