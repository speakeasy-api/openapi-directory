import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationsourcetype_enum as shared_recommendationsourcetype_enum
from ..shared import summary as shared_summary


@dataclass_json
@dataclasses.dataclass
class RecommendationSummary:
    r"""RecommendationSummary
    A summary of a recommendation.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    recommendation_resource_type: Optional[shared_recommendationsourcetype_enum.RecommendationSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationResourceType') }})
    summaries: Optional[list[shared_summary.Summary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
