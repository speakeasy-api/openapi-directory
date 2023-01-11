import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reaction_enum as shared_reaction_enum


@dataclass_json
@dataclasses.dataclass
class RecommendationFeedbackSummary:
    r"""RecommendationFeedbackSummary
     Information about recommendation feedback summaries. 
    """
    
    reactions: Optional[list[shared_reaction_enum.ReactionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reactions') }})
    recommendation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationId') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
