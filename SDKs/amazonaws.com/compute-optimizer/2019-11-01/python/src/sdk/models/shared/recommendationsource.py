import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationsourcetype_enum as shared_recommendationsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class RecommendationSource:
    r"""RecommendationSource
    Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
    """
    
    recommendation_source_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSourceArn') }})
    recommendation_source_type: Optional[shared_recommendationsourcetype_enum.RecommendationSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSourceType') }})
    
